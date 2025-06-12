import "./styles/index.scss";
import {
  SIZES,
  THEME,
  RADIUS,
  SHADOWS,
  SPACING,
  STATUS,
  COLORS,
} from "./constants/const";
import {
  RADIUS_VALUES,
  SHADOWS_VALUES,
  SPACING_VALUES,
  COLORS_VALUES,
} from "./constants/constValues";
import Icon from "./components/Foundations/Icons/Icon";
import Text from "./components/Foundations/Typography/Text";
import {
  DisplayLarge,
  DisplaySmall,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Body,
  BodySmall,
  BodyExtraSmall,
} from "./components/Foundations/Typography/Typography";
import Flex from "./components/Utils/Flex/Flex";
import { Row, Column } from "./components/Utils/Flex/FlexContainers";
import DropdownMenu from "./components/Utils/DropownMenu/DropdownMenu";
import Overlay from "./components/Utils/Overlay/Overlay";

import Accordion from "./components/BaseComponents/Accordion/Accordion";
import Alert from "./components/BaseComponents/Alert/Alert";
import Avatar from "./components/BaseComponents/Avatar/Avatar";
import Button from "./components/BaseComponents/Button/Button";
import Checkbox from "./components/BaseComponents/Checkbox/Checkbox";
import Divider from "./components/BaseComponents/Divider/Divider";
import Dialog from "./components/BaseComponents/Dialog/Dialog";
import Hint from "./components/BaseComponents/Hint/Hint";
import InputSearch from "./components/BaseComponents/InputSearch/InputSearch";
import ListItem from "./components/BaseComponents/ListItem/ListItem";
import Radiobox from "./components/BaseComponents/Radiobox/Radiobox";
import Select from "./components/BaseComponents/Select/Select";
import Switch from "./components/BaseComponents/Switch/Switch";
import Tag from "./components/BaseComponents/Tag/Tag";
import TextArea from "./components/BaseComponents/TextArea/TextArea";
import TextField from "./components/BaseComponents/TextField/TextField";
import Toast from "./components/BaseComponents/Toast/Toast";

import { capitalizeFirstLetter } from "./helpers/text.helpers";

export {
  SIZES,
  THEME,
  RADIUS,
  SHADOWS,
  SPACING,
  STATUS,
  COLORS,
  RADIUS_VALUES,
  SHADOWS_VALUES,
  SPACING_VALUES,
  COLORS_VALUES,
  Icon,
  Text,
  DisplayLarge,
  DisplaySmall,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Body,
  BodySmall,
  BodyExtraSmall,
  Flex,
  DropdownMenu,
  Row,
  Column,
  Overlay,
  Accordion,
  Alert,
  Avatar,
  Button,
  Hint,
  Checkbox,
  Dialog,
  Divider,
  InputSearch,
  ListItem,
  Radiobox,
  Select,
  Switch,
  Tag,
  TextArea,
  TextField,
  Toast,
  // Helpers
  capitalizeFirstLetter,
};
