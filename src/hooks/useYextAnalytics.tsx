import { useSearchActions } from "@yext/search-headless-react";
import { CtaEvent, provideAnalytics } from "@yext/analytics";

export const useYextAnalytics = () => {
  const searchAction = useSearchActions();

  const analytics = provideAnalytics({
    experienceKey: "test",
    businessId: 4042106,
    experienceVersion: "PRODUCTION",
  });

  const dispatchYextEvent = (
    event: CtaEvent["type"],
    configs?: {
      entityId?: string;
      verticalKey?: string;
    }
  ) => {
    const queryId = searchAction.state.query.queryId || "";
    const verticalKey =
      configs?.verticalKey ?? searchAction.state.vertical.verticalKey ?? "";

    analytics?.report({
      type: event,
      queryId,
      verticalKey,
      entityId: configs?.entityId || "",
      searcher: verticalKey ? "VERTICAL" : "UNIVERSAL",
      url: window.location.href,
    });
  };

  return { dispatchYextEvent };
};
