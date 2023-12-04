import { Injectable } from '@nestjs/common';
import * as data from './data.json';

type ItemTier = 'epic' | 'common' | 'mythic' | 'legendary' | 'rare';
type ItemCharacter = 'dj' | 'assassin' | 'basketball' | 'mafia' | 'neon';
type UserCheck = 'green' | 'red';

interface PaginatedItems<T> {
  items: T[];
  totalItems: number;
  totalPages: number;
}

interface Item {
  tier: string;
  character: string;
  characterName: string;
  price: number | string;
  currency: string;
}

@Injectable()
export class AppService {
  private readonly items: Item[] = data;

  createItem(
    tier: ItemTier,
    character: ItemCharacter,
    characterName: string,
    price: number | string,
    currency: string,
  ): Item {
    return {
      tier,
      character,
      characterName,
      price,
      currency,
    };
  }

  filterItems(filters: Partial<Item>): Item[] {
    // Implement your filtering logic here based on the provided filters
    // For simplicity, this example assumes an AND condition for all filters
    return this.items.filter((item) =>
      Object.entries(filters).every(
        ([key, value]) => value === undefined || item[key] === value,
      ),
    );
  }

  getPaginatedItems(
    items: Item[],
    page: number,
    pageSize: number,
  ): PaginatedItems<Item> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedItems = items.slice(startIndex, endIndex);

    return {
      items: paginatedItems,
      totalItems: items.length,
      totalPages: Math.ceil(items.length / pageSize),
    };
  }
}
