import SimpleTitle from '../components/SimpleTitle'
import SubTitle from '../components/SubTitle'
import CTA from '../components/CTA'
import ImageText from '../components/ImageText'
import SimpleText from "../components/SimpleText";
import MultipleColumnText from "../components/MultipleColumnText";
import FullImage from '../components/FullImage';
import SmallImage from "../components/SmallImage";
import Galerie from "../components/Galerie";

const blocList = {
  "titles.simple-title": SimpleTitle,
  "titles.subtitle": SubTitle,
  "images.full-image": FullImage,
  "texts.multiple-column-text": MultipleColumnText,
  "main.image-text": ImageText,
  "texts.simple-text": SimpleText,
  "images.gallerie": Galerie,
  "images.small-image": SmallImage,
  "CTA": CTA
}

export default blocList
