import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function buscarPerfil(uid) {
  const resultado = await getDoc(doc(db, 'usuarios', uid));

  if (!resultado.exists()) {
    return null;
  }

  return resultado.data();
}

export async function salvarPerfil(usuario, perfil) {
  return setDoc(
    doc(db, 'usuarios', usuario.uid),
    {
      uid: usuario.uid,
      email: usuario.email,
      nome: perfil.nome.trim(),
      idade: perfil.idade.trim(),
      personagemFavorito: perfil.personagemFavorito.trim(),
      biografia: perfil.biografia.trim(),
      atualizadoEm: serverTimestamp(),
    },
    { merge: true }
  );
}