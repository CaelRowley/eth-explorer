export type Block = {
  hash: string;
  number: number;
  gasLimit: number;
  gasUsed: number;
  difficulty: string;
  time: number;
  parentHash: string;
  nonce: string;
  miner: string;
  size: number;
  rootHash: string;
  uncleHash: string;
  txHash: string;
  receiptHash: string;
  extraData: Uint8Array;
};

export async function fetchBlocks(): Promise<Block[]> {
  try {
    const response = await fetch("http://localhost:8080/eth/get-blocks", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    // To simulate long data fetch
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const blocks: Block[] = await response.json();
    
    return blocks
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch blocks.');
  }
}