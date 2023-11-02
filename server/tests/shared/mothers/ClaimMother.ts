import Visitor from "../../../src/domain/entities/visitor.entities";
import Category from "../../../src/domain/entities/category.entities";
import Claim from "../../../src/domain/entities/claim.entities";

export class ClaimMother {

  static withoutLikes(visitor: Visitor, category: Category): Claim {

    return Claim.create(
      visitor,
      category,
      'un titulo',
      'descripcion',
      'una ubicacion'
    )
  }

  static withLikes(visitor: Visitor, category: Category, strings: string[]) {

    const claim = Claim.create(
      visitor,
      category,
      'un titulo',
      'descripcion',
      'una ubicacion'
    )
    strings.forEach((id) => {
      claim.addLike(id)
    })

    return claim;
  }
}