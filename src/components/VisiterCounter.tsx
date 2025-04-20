"use client";

import { Flex, Text } from '@/once-ui/components';

export default function VisitorCounter() {
  // Generate a random number between 5 and 50
  const visitorCount = Math.floor(Math.random() * 45) + 5;

  return (
    <Flex 
      position="fixed" 
      bottom="m"  // Changed from "s" to "m" for more downward position
      right="s" 
      padding="s" 
      background="surface" 
      radius="s"
      style={{
        transform: 'translateY(40px)', // Additional downward offset
        backdropFilter: 'blur(4px)' // Optional: adds glass effect
      }}
    >
      <Text size="xs" color="text-secondary">
        {visitorCount} people viewing
      </Text>
    </Flex>
  );
}