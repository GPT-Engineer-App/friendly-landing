import { ChakraProvider, Box, Flex, Text, Button, Heading, Link, VStack, Input, useColorMode, useColorModeValue, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGoogle, FaEtsy, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

// The theme object has been removed as it is not needed and was causing the error

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerBg = useColorModeValue("teal.300", "teal.800");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Box bg={headerBg} px={4} py={2}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Heading size="md" color={color}>
              SaaS Friend 🚀
            </Heading>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/about">
              <Link color={color}>About</Link>
            </NavLink>
            <NavLink to="/tools">
              <Link color={color}>Tools</Link>
            </NavLink>
            <NavLink to="/pricing">
              <Link color={color}>Pricing</Link>
            </NavLink>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/login">
              <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid">
                Login
              </Button>
            </NavLink>
            <NavLink to="/signup">
              <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="outline">
                Sign Up
              </Button>
            </NavLink>
          </HStack>
          <IconButton size={"md"} icon={colorMode === "light" ? <FaMoon /> : <FaSun />} ml={2} onClick={toggleColorMode} colorScheme="teal" />
        </Flex>
      </Flex>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box py={6} px={4} bg={useColorModeValue("teal.300", "teal.800")}>
      <Flex justify="center" align="center">
        <Text color={useColorModeValue("white", "gray.200")}>© 2023 SaaS Friend. Made with 💖 for SaaS.</Text>
      </Flex>
    </Box>
  );
};

const About = () => {
  return <Text p={4}>About content will go here.</Text>;
};

const Tools = () => {
  return <Text p={4}>Tools content will go here.</Text>;
};

const Pricing = () => {
  return <Text p={4}>Pricing content will go here.</Text>;
};

const Signup = () => {
  return (
    <VStack spacing={4} align="flex-start" p={4}>
      <Heading size="lg">Create your account 🎉</Heading>
      <Input placeholder="Email address" />
      <Button leftIcon={<FaGoogle />} colorScheme="red" w="full">
        Sign up with Google
      </Button>
      <Button leftIcon={<FaEtsy />} colorScheme="orange" w="full">
        Sign up with Etsy
      </Button>
      <Button colorScheme="teal" w="full">
        Sign up
      </Button>
    </VStack>
  );
};

const Login = () => {
  return (
    <VStack spacing={4} align="flex-start" p={4}>
      <Heading size="lg">Welcome back! 👋</Heading>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button colorScheme="teal" w="full">
        Log in
      </Button>
    </VStack>
  );
};

const Home = () => {
  return (
    <Box p={4} textAlign="center">
      <VStack spacing={4} align="flex-start">
        <Heading size="2xl">Welcome to SaaS Friend ✨</Heading>
        <Text fontSize="lg">The friendly SaaS platform that helps you succeed. Join us and get the tools you need to thrive!</Text>
        <Text fontSize="md" color="gray.500">
          Trusted by over 1,000 happy users 🎉
        </Text>
        <Button colorScheme="teal">Get Started</Button>
      </VStack>
      <Image src="https://images.unsplash.com/photo-1542596594-649edbc13630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZXxlbnwwfHx8fDE3MDkxNDIzODl8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" m="0 auto" />
    </Box>
  );
};

const Index = () => {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </>
  );
};

export default Index;
