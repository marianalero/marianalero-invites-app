import { useEffect, useState } from "react";
import {
  FeatureCode,
  InvitationFeatures,
  hasFeature,
} from "../models/invitationFeatures";
import { getInvitationFeatures } from "../services/invitationApiClient";

type InvitationFeaturesStatus = "loading" | "ready" | "error";

export function useInvitationFeatures(invitationId: number) {
  const [features, setFeatures] = useState<InvitationFeatures | null>(null);
  const [status, setStatus] = useState<InvitationFeaturesStatus>("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setFeatures(null);

    getInvitationFeatures(invitationId)
      .then((data) => {
        if (cancelled) return;
        setFeatures(data);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [invitationId]);

  return {
    features,
    status,
    hasFeature: (code: FeatureCode) => hasFeature(features, code),
  };
}
