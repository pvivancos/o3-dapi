import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface GetDDOInput {
  identity: string;
}

interface OntIdAttribute {
  key: string;
  type: string;
  value: string;
}

interface OntIdDDO {
  attributes: OntIdAttribute[];
}

export function getDDO(data: GetDDOInput): Promise<OntIdDDO> {
  return sendMessage({
    command: Command.getDDO,
    data,
  });
}
