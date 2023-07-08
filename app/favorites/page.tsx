import { ClientOnly, EmptyState, FavoritesClient } from "@/components";
import { getCurrentUser, getFavoriteListings } from "@/utils";
import React from "react";

const FavoritePage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorites found"
          subtitle="Looks like you have no favorites listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
