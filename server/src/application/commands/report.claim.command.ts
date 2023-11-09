export class ReportClaimCommand {
  private readonly idClaimOriginal: string;
  private readonly idClaimDuplicado: string;

  constructor(idClaimOriginal: string, idClaimDuplicado: string) {
    this.idClaimOriginal = idClaimOriginal;
    this.idClaimDuplicado = idClaimDuplicado;
  }

  getIdClaimOriginal(): string {
    return this.idClaimOriginal;
  }
  getIdClaimDuplicado(): string {
    return this.idClaimDuplicado;
  }
}
