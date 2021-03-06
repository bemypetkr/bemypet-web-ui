import React, { useState } from "react";
import {
  ThemeProvider,
  Layout,
  PageBody,
  Row,
  Column,
  Avatar,
  Button,
  Checkbox,
  Header,
  Input,
  List,
  ListItem,
  Radio,
  Typography,

  // Common Icons
  ArrowRight,
  Blockquote,
  Calendar,
  Camera,
  Clear,
  ClearCircle,
  Comment,
  HeartFilled,
  HeartOutline,
  Image,
  Menu,
  More,
  Pencil,
  Profile,
  Search,
  Share,
  Show,
  Hide,
  Plus,
  StarFilled,
  StarHalf,
  StarOutline,
  Check,

  // Social Provider Icons
  AppleIcon,
  AppStoreIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  NaverIcon,
  PlayStoreIcon,
  YoutubeIcon,
} from "bemypet-web-ui";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <ThemeProvider>
      <Layout
        helmetProps={{ title: "Bemypet UI" }}
        footerProps={{
          buttons: [
            {
              label: "크리에이터 제휴문의",
              onClick: () => {
                // todo
              },
            },
            {
              label: "크리에이터 전체보기",
              onClick: () => {
                // todo
              },
            },
          ],
          visible: false,
        }}
      >
        <Header
          menus={[
            { label: "홈", to: "/" },
            { label: "스토리", to: "/", selected: true },
          ]}
          locationPath={"https://accounts.mypetlife.co.kr"}
        >
          <Typography variant="heading2">Bemypet UI</Typography>
        </Header>
        <PageBody>
          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              Radio
            </Typography>
            <Column>
              <Radio name="default" />
              <Radio name="default" defaultChecked />
              <Radio name="primary" color="primary" label="Primary" />
              <Radio
                name="primary"
                color="primary"
                label="Primary checked"
                defaultChecked
              />
              <Radio name="secondary" color="secondary" label="Secondary" />
              <Radio
                name="secondary"
                color="secondary"
                label="Secondary checked"
                defaultChecked
              />
            </Column>
          </Column>

          <Column marginTop={50} justifyContent="space-evenly">
            <Typography variant="heading1" as="h1">
              Typography
            </Typography>
            <Row>
              <Column>
                <Typography variant="heading3" as="h3">
                  Style Variation
                </Typography>
                <Typography variant="heading1" as="h1">
                  Heading 1
                </Typography>
                <Typography variant="heading2" as="h2">
                  Heading 2
                </Typography>
                <Typography variant="heading3" as="h3">
                  Heading 3
                </Typography>
                <Typography variant="body1">Body 1</Typography>
                <Typography variant="body2">Body 2</Typography>
                <Typography variant="article1">Article 1</Typography>
                <Typography variant="article2">Article 2</Typography>
                <Typography variant="caption">Caption</Typography>
              </Column>
              <Column>
                <Typography variant="heading3" as="h3">
                  Color Variation
                </Typography>
                <Typography>Default</Typography>
                <Typography color="grey500">Grey 500</Typography>
                <Typography color="grey400">Grey 400</Typography>
                <Typography color="grey300">Grey 300</Typography>
                <Typography color="grey200">Grey 200</Typography>
                <Typography color="grey100">Grey 100</Typography>
                <Typography color="primary100">Primary</Typography>
                <Typography color="secondary100">Secondary</Typography>
                <Typography color="red">Red</Typography>
                <Typography color="green">Green</Typography>
              </Column>
            </Row>
          </Column>
          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              Button
            </Typography>
            <Typography variant="heading3" as="h3">
              Color Variation
            </Typography>
            <Row>
              <Button onClick={handleOnButtonClick} loading={loading}>
                Default
              </Button>
              <Button onClick={handleOnButtonClick} loading={loading} positive>
                Positive
              </Button>
              <Button onClick={handleOnButtonClick} loading={loading} negative>
                Negative
              </Button>
              <Button onClick={handleOnButtonClick} loading={loading} disabled>
                Disabled
              </Button>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                color="primary"
              >
                Primary
              </Button>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                color="secondary"
              >
                Secondary
              </Button>
            </Row>
            <Typography variant="heading3" as="h3">
              Size Variation
            </Typography>
            <Row>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                size="small"
              >
                Small
              </Button>
              <Button onClick={handleOnButtonClick} loading={loading}>
                Medium
              </Button>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                size="large"
              >
                Large
              </Button>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                color="primary"
                size="small"
              >
                Small
              </Button>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                color="primary"
                size="medium"
              >
                Medium
              </Button>
              <Button
                onClick={handleOnButtonClick}
                loading={loading}
                color="primary"
                size="large"
              >
                Large
              </Button>
            </Row>
          </Column>
          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              Input
            </Typography>
            <Typography variant="heading3" as="h3">
              Variation
            </Typography>
            <Row>
              <Input placeholder="Default" />
              <Input value="Read Only" readOnly />
              <Input value="Error" error />
              <Input value="Disabled" disabled />
              <Input
                placeholder="With Icon"
                disabled
                trailing={<GoogleIcon width={24} height={24} />}
              />
            </Row>
            <Typography variant="heading3" as="h3">
              With Label
            </Typography>
            <Row>
              <Input placeholder="Default" label="Default Label" />
              <Input
                type="password"
                placeholder="Password"
                label="Password"
                helperText={"Password can be displayed"}
              />
              <Input
                placeholder="Default"
                label="Default Label"
                helperText="Helper message is here"
              />
              <Input
                placeholder="Default"
                label={<label style={{ color: "red" }}>Custom Label</label>}
              />
              <Input
                placeholder="Default"
                label="Default Label"
                helperText={
                  <p style={{ color: "red" }}>
                    {"Custom Helper message is here"}
                  </p>
                }
              />
            </Row>
          </Column>
          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              Checkbox
            </Typography>
            <Column>
              <Checkbox />
              <Checkbox defaultChecked />
              <Checkbox label="w/ label" />
              <Checkbox color="primary" label="Primary" />
              <Checkbox
                color="primary"
                label="Primary checked"
                defaultChecked
              />
              <Checkbox color="secondary" label="Secondary" />
              <Checkbox
                color="secondary"
                label="Secondary checked"
                defaultChecked
              />
            </Column>
          </Column>

          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              List
            </Typography>
            <Row>
              <List>
                <ListItem primary="Primary Text" />
                <ListItem primary="Primary Text" secondary="Secondary Text" />
                <ListItem avatar={<Avatar />} primary="Primary Text" />
                <ListItem
                  avatar={<Avatar />}
                  primary="Primary Text"
                  secondary="Secondary Text"
                />
                <ListItem
                  primary="Primary Text w/ trailing icon"
                  trailing={<ArrowRight />}
                />
                <ListItem primary="Primary Text (Hoverable)" button />
              </List>
            </Row>
          </Column>

          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              Avatar
            </Typography>
            <Typography variant="heading3" as="h3">
              Variation
            </Typography>
            <Row>
              <Avatar />
              <Avatar label={"with label"} />
              <Avatar label={"with horizontal label"} axis={"horizontal"} />
              <Avatar
                label={"40px avatar with label"}
                axis={"horizontal"}
                size={40}
              />
            </Row>
          </Column>
          <Column marginTop={50}>
            <Typography variant="heading1" as="h1">
              Icons
            </Typography>
            <Typography variant="heading3" as="h3">
              Common (Default size 24px)
            </Typography>
            <Row>
              <ArrowRight />
              <Blockquote />
              <Calendar />
              <Camera />
              <Check />
              <Clear />
              <ClearCircle />
              <Comment />
              <HeartFilled />
              <HeartOutline />
              <Image />
              <Menu />
              <More />
              <Pencil />
              <Plus />
              <Profile />
              <Search />
              <Share />
              <Hide />
              <Show />
              <StarFilled />
              <StarHalf />
              <StarOutline />
            </Row>
            <Typography variant="heading3" as="h3">
              Social Icons (Default size 40px)
            </Typography>
            <Row>
              <AppleIcon />
              <AppStoreIcon />
              <FacebookIcon />
              <GoogleIcon />
              <InstagramIcon />
              <NaverIcon />
              <PlayStoreIcon />
              <YoutubeIcon />
            </Row>
          </Column>
          <Column marginTop={50}></Column>
        </PageBody>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
