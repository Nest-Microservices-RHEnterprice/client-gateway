export enum OrdeStatus {
  PENDING = 'PENDING',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export const OrderStatusList = [
  OrdeStatus.PENDING,
  OrdeStatus.CANCELLED,
  OrdeStatus.DELIVERED,
];
