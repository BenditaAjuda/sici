export interface AcaoControle {
  id: number
  codigo: string
  unidadeAuditoriaInterna: UnidadeAuditoriaInterna
  anoProgramacao: number
  areaExecutora: AreaExecutora
  descricaoAcao: string
  tipoAcao: string
  naturezasAcao: number[]
  situacao: number
  unidadesAuditadas: UnidadesAuditada[]
  programaGoverno: ProgramaGoverno
  objetivoPPA: ObjetivoPpa
  classificacaoAcao: string
  quantidadeMembros: number
  diasUteisRealizacao: number
  esforcoTotal: number
  dataCadastro: string
}

export interface UnidadeAuditoriaInterna {
  id: number
  nome: string
  descricao: string
}

export interface AreaExecutora {
  id: number
  nome: string
  descricao: string
}

export interface UnidadesAuditada {
  codigo: number
  descricao: string
}

export interface ProgramaGoverno {
  codigo: number
  descricao: string
}

export interface ObjetivoPpa {
  id: number
  descricao: string
}
