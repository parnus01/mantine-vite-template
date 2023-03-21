import { Button, Stack, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export function Welcome() {
  const { openModal } = useRainDropModal();
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button onClick={openModal}>Click me !</Button>
    </Stack>
  );
}

const useRainDropModal = () => {
  const openModal = () =>
    modals.openConfirmModal({
      title: 'RainDrop Modal',
      children: (
        <Text size="sm">
          LINE Seedは、「成長」の意味を込めて、 LINEが初めて開発したフォントシリーズです。
          ジオメトリックな形でLINEの利便性と フレンドリーなアイデンティティから
          着想を得て制作されました。
        </Text>
      ),
      labels: {
        confirm: 'Confirm',
        cancel: 'Cancel',
      },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });
  return { openModal };
};
