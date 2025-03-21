import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  ContractURIUpdated,
  ControllerAdded,
  ControllerRemoved,
  NameRegistered,
  NameRegisteredWithRecord,
  NameRenewed,
  OwnershipHandoverCanceled,
  OwnershipHandoverRequested,
  OwnershipTransferred,
  Transfer
} from "../generated/BaseRegistrar/BaseRegistrar"

export function createApprovalEvent(
  owner: Address,
  account: Address,
  id: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  isApproved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam(
      "isApproved",
      ethereum.Value.fromBoolean(isApproved)
    )
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createContractURIUpdatedEvent(): ContractURIUpdated {
  let contractUriUpdatedEvent = changetype<ContractURIUpdated>(newMockEvent())

  contractUriUpdatedEvent.parameters = new Array()

  return contractUriUpdatedEvent
}

export function createControllerAddedEvent(
  controller: Address
): ControllerAdded {
  let controllerAddedEvent = changetype<ControllerAdded>(newMockEvent())

  controllerAddedEvent.parameters = new Array()

  controllerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )

  return controllerAddedEvent
}

export function createControllerRemovedEvent(
  controller: Address
): ControllerRemoved {
  let controllerRemovedEvent = changetype<ControllerRemoved>(newMockEvent())

  controllerRemovedEvent.parameters = new Array()

  controllerRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "controller",
      ethereum.Value.fromAddress(controller)
    )
  )

  return controllerRemovedEvent
}

export function createNameRegisteredEvent(
  id: BigInt,
  owner: Address,
  expires: BigInt
): NameRegistered {
  let nameRegisteredEvent = changetype<NameRegistered>(newMockEvent())

  nameRegisteredEvent.parameters = new Array()

  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )

  return nameRegisteredEvent
}

export function createNameRegisteredWithRecordEvent(
  id: BigInt,
  owner: Address,
  expires: BigInt,
  resolver: Address,
  ttl: BigInt
): NameRegisteredWithRecord {
  let nameRegisteredWithRecordEvent =
    changetype<NameRegisteredWithRecord>(newMockEvent())

  nameRegisteredWithRecordEvent.parameters = new Array()

  nameRegisteredWithRecordEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  nameRegisteredWithRecordEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nameRegisteredWithRecordEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )
  nameRegisteredWithRecordEvent.parameters.push(
    new ethereum.EventParam("resolver", ethereum.Value.fromAddress(resolver))
  )
  nameRegisteredWithRecordEvent.parameters.push(
    new ethereum.EventParam("ttl", ethereum.Value.fromUnsignedBigInt(ttl))
  )

  return nameRegisteredWithRecordEvent
}

export function createNameRenewedEvent(
  id: BigInt,
  expires: BigInt
): NameRenewed {
  let nameRenewedEvent = changetype<NameRenewed>(newMockEvent())

  nameRenewedEvent.parameters = new Array()

  nameRenewedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  nameRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )

  return nameRenewedEvent
}

export function createOwnershipHandoverCanceledEvent(
  pendingOwner: Address
): OwnershipHandoverCanceled {
  let ownershipHandoverCanceledEvent =
    changetype<OwnershipHandoverCanceled>(newMockEvent())

  ownershipHandoverCanceledEvent.parameters = new Array()

  ownershipHandoverCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverCanceledEvent
}

export function createOwnershipHandoverRequestedEvent(
  pendingOwner: Address
): OwnershipHandoverRequested {
  let ownershipHandoverRequestedEvent =
    changetype<OwnershipHandoverRequested>(newMockEvent())

  ownershipHandoverRequestedEvent.parameters = new Array()

  ownershipHandoverRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pendingOwner",
      ethereum.Value.fromAddress(pendingOwner)
    )
  )

  return ownershipHandoverRequestedEvent
}

export function createOwnershipTransferredEvent(
  oldOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  id: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return transferEvent
}
