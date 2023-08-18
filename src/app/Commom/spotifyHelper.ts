import { iUsuario } from '../Interfaces/iUsuario';

export function SpotifyUserParaUsuario(
  user: SpotifyApi.CurrentUsersProfileResponse
): iUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url,
  };
}
