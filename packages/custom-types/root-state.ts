import { MessageTypes, Wargame } from '.';
import PlatformType from './platform-type';
import Role from './role';

export type GameInfo = {
  imageUrlSet: boolean;
  imageUrl: string;
  title: string;
  description: string;
  showAccessCodes: boolean;
}

export type Messages = {
  isLoading: boolean;
  messages: never[];
  messagePreviewId: string;
  messagePreview: {};
}

export type UmpireMenu = {
  selectedSchemaID: string;
  previewSchema: {};
}

export type ExportItems = {
  data: never[];
  loader: boolean;
}

export interface ActivityLogsInterface {
  activityTime: string
  activityType: string
  role: string
  wargame: string
}

export type DBLoadingState = {
  loadingMessageTypes: boolean;
  loadingWargames: boolean;
}

export type RoleType = {
  roles: Role[],
  key: number,
  handleChange: (changedItems: Array<Role>) => void
}

/** data structure being collated for the
 * modal dialog
 */
export type ModalData = {
  type: string,
  data: string | RoleType | PlatformType,
  customMessages: {
    title: string,
    message: string
  }
}

export type ModalTypes = 'delete' | 'deleteWargame' | 'unsavedForce' | 'unsavedChannel' | 'addIcon' | 'colorpicker' | 'uploadLogo' | 'confirmDelete'

export type CurrentModal = {
  /**
   * whether this modal is open
   */
  open: boolean;
  /**
   * type of modal in use
   */
  modal: ModalTypes;
  /**
   * the data that is being deleted
   */
  data: string | ModalData
}

export type RootState = {
  messageTypes: MessageTypes
  messages: Messages
  umpireMenu: UmpireMenu
  currentViewURI: string
  currentModal: CurrentModal
  notifications: any[]
  playerLog: ActivityLogsInterface
  wargame: Wargame
  dbLoading: DBLoadingState
  exportItems: ExportItems
  gameInfo: GameInfo
}