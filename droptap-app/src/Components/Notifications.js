import { Icon, HStack, VStack, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { RiAlertFill } from "react-icons/ri";
import { IoAlertCircle } from "react-icons/io5";

function NotificationItem() {
    const NotificationList = [
        {
            title: "Une fuite a été détectée.",
            type: "red",
            description: "Veuillez intervenir au plus tôt possible.",
            date: "Mardi 12 Novembre, 13h00",
        },

        {
            title: "La qualité de l'eau n'est pas optimale.",
            type: "yellow",
            description: "",
            date: "Mardi 12 Novembre, 13h00",
        },
    ];
    return (
        <div>
            {NotificationList.map((item, index) => (
                <Box key={index}
                    borderRadius="20px"
                    bg="white"
                    boxShadow="xl"
                    pl={2}
                    pr={5}
                    py={4}
                    mb={2}
                >
                    <HStack align="flex-start">
                        {item.type==="red" &&
                            <Icon
                            as={ RiAlertFill }
                            color="#FA1616"
                            w="32px"
                            h="32px"
                            ml="5px"
                            mt={2}
                            />
                        }
                        {item.type==="yellow" &&
                            <Icon
                            as={ IoAlertCircle }
                            color="#FFD60A"
                            w="32px"
                            h="32px"
                            ml="5px"
                            mt={2}
                            />
                        }
                        
                        <Box w="100%">
                            <Text fontSize="sm" fontWeight="semibold">
                                {item.title}
                            </Text>
                            <Text fontSize="xs">{item.description}</Text>
                            <Text color="grey" fontSize="xs" mt={2}>
                                {item.time}
                            </Text>
                            <Text
                                fontSize="xs"
                                fontWeight="semibold"
                                align="right"
                                mt={2}
                            >
                                Marquer comme lu
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            ))}
        </div>
    );
}

function Notifications() {
    return (
        <Box>
            <VStack spacing="10px" align="stretch">
                {NotificationItem()}
            </VStack>
        </Box>
    );
}

export default Notifications;