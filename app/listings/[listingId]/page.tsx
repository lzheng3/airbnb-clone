import { ClientOnly, EmptyState, ListingClient } from "@/components";
import { getCurrentUser, getListingById, getReservations } from "@/utils";
import React from "react";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservation = await getReservations(params);
  if (!listing)
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservation}
      />
    </ClientOnly>
  );
};

export default ListingPage;
