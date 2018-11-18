import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface OntIdAttribute {
  key: string;
  type: string;
  value: string;
}

interface AddAttributesInput {
  attributes: OntIdAttribute[];
}

export function addAttributes(data: AddAttributesInput): Promise<void> {
  return sendMessage({
    command: Command.addAttributes,
    data,
  });
}
