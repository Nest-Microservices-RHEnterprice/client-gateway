import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatusList, OrdeStatus } from '../enum/order.enum';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList} `,
  })
  status: OrdeStatus;
}
