/* eslint-disable indent */
import { cssClassNames } from "shared/helpers/class-names/css-class-names";

import styles from "./text.module.scss";

enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

enum Tags {
  HEADING_ONE = "h1",
  HEADING_TWO = "h2",
  HEADING_THREE = "h3",
  PARAGRAPH = "p",
  DIV = "div",
  SPAN = "span",
  LEGEND = "legend",
}

interface TextProps {
  className?: string;
  title?: string;
  paragraph?: string;
  theme?: TextTheme;
  tag?: Tags;
}

const Text = (props: TextProps) => {
  const { className, title, paragraph, theme = TextTheme.PRIMARY, tag } = props;
  const mod = { [styles[theme]]: true };

  const tags = (
    tag: Tags = Tags.HEADING_ONE,
    title: string,
    paragraph: string
  ) => {
    switch (tag) {
      case Tags.HEADING_ONE:
        return <h1 className={styles.title}>{title}</h1>;
      case Tags.HEADING_TWO:
        return <h2 className={styles.title}>{title}</h2>;
      case Tags.HEADING_THREE:
        return <h3 className={styles.title}>{title}</h3>;
      case Tags.PARAGRAPH:
        return <p className={styles.paragraph}>{paragraph}</p>;
      case Tags.DIV:
        return <div className={styles.paragraph}>{paragraph}</div>;
      case Tags.SPAN:
        return <span className={styles.paragraph}>{paragraph}</span>;
      case Tags.LEGEND:
        return <legend className={styles.title}>{title}</legend>;
      default:
        return null;
    }
  };

  return (
    <div className={cssClassNames("", mod, [className])}>
      {title && tags(tag, title, undefined)}
      {paragraph && tags(tag, undefined, paragraph)}
    </div>
  );
};

Text.displayName = "Text";
export { Tags, Text, TextTheme };
