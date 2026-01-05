import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react"

export const colorModeConfig={
    initialColorMode: "dark",
    useSystemColorMode:false,
}

const config = defineConfig({

    theme:{},
});
const system = createSystem( defaultConfig,config);

export default system;