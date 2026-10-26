import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { auth, db } from './firebase';

const personagensRef = collection(db, 'personagens');

function obterUsuarioAtual() {
  const usuario = auth.currentUser;

  if (!usuario) {
    throw new Error('Entre com sua conta antes de acessar os personagens.');
  }

  return usuario;
}

export async function criarPersonagem({ nome, tipo }) {
  const usuario = obterUsuarioAtual();

  return addDoc(personagensRef, {
    nome: nome.trim(),
    tipo: tipo.trim(),
    ownerId: usuario.uid,
    criadoEm: serverTimestamp(),
  });
}

export async function listarPersonagens() {
  const usuario = obterUsuarioAtual();
  const consulta = query(personagensRef, where('ownerId', '==', usuario.uid));
  const resultado = await getDocs(consulta);

  return resultado.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
}

export async function atualizarPersonagem(id, { nome, tipo }) {
  obterUsuarioAtual();

  return updateDoc(doc(db, 'personagens', id), {
    nome: nome.trim(),
    tipo: tipo.trim(),
    atualizadoEm: serverTimestamp(),
  });
}

export async function excluirPersonagem(id) {
  obterUsuarioAtual();

  return deleteDoc(doc(db, 'personagens', id));
}