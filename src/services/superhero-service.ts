import api from "./api";

const SuperHeroService = {
  getSuper: (name: any) => api.get(`/${name}`)
}

export default SuperHeroService