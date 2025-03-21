import {
  NameRegistered as NameRegisteredEvent,
  NameRegisteredWithRecord as NameRegisteredWithRecordEvent,
  Transfer as TransferEvent
} from "../generated/BaseRegistrar/BaseRegistrar"
import {
  Token,
  Holder
} from "../generated/schema"

export function handleNameRegistered(event: NameRegisteredEvent): void {
  let token = Token.load(event.params.id.toString());
  if (!token) {
    token = new Token(event.params.id.toString());
  }

  token.nameExpiresAt = event.params.expires

  let owner = Holder.load(event.params.owner.toHexString())
  if (!owner) {
    owner = new Holder(event.params.owner.toHexString())
    owner.save()
  }

  token.lastUpdatedAt = event.block.timestamp
  token.owner = owner.id
  token.save()
}

export function handleNameRegisteredWithRecord(
  event: NameRegisteredWithRecordEvent
): void {
  let token = Token.load(event.params.id.toString());
  if (!token) {
    token = new Token(event.params.id.toString());
  }

  token.nameExpiresAt = event.params.expires

  let owner = Holder.load(event.params.owner.toHexString())
  if (!owner) {
    owner = new Holder(event.params.owner.toHexString())
  }

  token.lastUpdatedAt = event.block.timestamp
  token.owner = owner.id
  token.save()
  owner.save()
}

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.id.toString());
  if (!token) {
    token = new Token(event.params.id.toString());
  }

  // Update new owner
  let newOwner = Holder.load(event.params.to.toHexString());
  if (!newOwner) {
    newOwner = new Holder(event.params.to.toHexString());
  }

  token.lastUpdatedAt = event.block.timestamp
  token.owner = newOwner.id;
  token.save();
  newOwner.save();
}