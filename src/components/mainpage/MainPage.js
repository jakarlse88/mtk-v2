/*
 * Components
 */
import Hapkido from "./subcomponents/hkd/Hapkido";
import Hero from "./subcomponents/hero/Hero";
import MuayThai from "./subcomponents/mt/MuayThai";
import Jujutsu from "./subcomponents/bjj/Jujutsu";
import React from "react";
import Taekwondo from "./subcomponents/tkd/Taekwondo";
/*
 * Config
 */
import config from "./config";

const MainPage = () => (
	<>
		<Hero
			title={config.hero.title}
			subtitle={config.hero.subtitle}
			textColor={config.hero.textColor}
		/>
		<Taekwondo />
		<Hapkido />
		<Jujutsu />
		<MuayThai />
	</>
);

export default MainPage;
