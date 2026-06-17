(function () {
  const LANGUAGE_KEY = 'freesewaa-language';

  const commonText = {
    ko: {
      Home: '홈',
      'About Us': '소개',
      Donate: '기부',
      Browse: '찾기',
      Events: '행사',
      'Donate Us': '후원',
      Notifications: '알림',
      Messages: '메시지',
      Settings: '설정',
      'My Posts': '내 게시물',
      'Track Your Request': '요청 확인',
      'Free Services': '무료 서비스',
      'Personal Information': '개인 정보',
      'Edit Profile': '프로필 수정',
      'Change Region': '지역 변경',
      'Saved Items': '저장한 항목',
      'My Requests': '내 요청',
      'Toggle Dark Mode': '다크 모드 전환',
      Logout: '로그아웃'
    },
    ne: {
      Home: 'गृह',
      'About Us': 'हाम्रो बारेमा',
      Donate: 'दान',
      Browse: 'खोज्नुहोस्',
      Events: 'कार्यक्रम',
      'Donate Us': 'हामीलाई सहयोग',
      Notifications: 'सूचना',
      Messages: 'सन्देश',
      Settings: 'सेटिङ',
      'My Posts': 'मेरा पोस्ट',
      'Track Your Request': 'अनुरोध हेर्नुहोस्',
      'Free Services': 'निःशुल्क सेवा',
      'Personal Information': 'व्यक्तिगत जानकारी',
      'Edit Profile': 'प्रोफाइल सम्पादन',
      'Change Region': 'क्षेत्र बदल्नुहोस्',
      'Saved Items': 'सुरक्षित सामान',
      'My Requests': 'मेरा अनुरोध',
      'Toggle Dark Mode': 'डार्क मोड बदल्नुहोस्',
      Logout: 'लगआउट'
    },
    hi: {
      Home: 'होम',
      'About Us': 'हमारे बारे में',
      Donate: 'दान करें',
      Browse: 'ब्राउज़',
      Events: 'कार्यक्रम',
      'Donate Us': 'हमें सहयोग दें',
      Notifications: 'सूचनाएं',
      Messages: 'संदेश',
      Settings: 'सेटिंग्स',
      'My Posts': 'मेरी पोस्ट',
      'Track Your Request': 'अनुरोध ट्रैक करें',
      'Free Services': 'निःशुल्क सेवाएं',
      'Personal Information': 'व्यक्तिगत जानकारी',
      'Edit Profile': 'प्रोफाइल संपादित करें',
      'Change Region': 'क्षेत्र बदलें',
      'Saved Items': 'सेव किए गए आइटम',
      'My Requests': 'मेरे अनुरोध',
      'Toggle Dark Mode': 'डार्क मोड बदलें',
      Logout: 'लॉगआउट'
    },
    vi: {
      Home: 'Trang chủ',
      'About Us': 'Giới thiệu',
      Donate: 'Quyên góp',
      Browse: 'Tìm kiếm',
      Events: 'Sự kiện',
      'Donate Us': 'Ủng hộ',
      Notifications: 'Thông báo',
      Messages: 'Tin nhắn',
      Settings: 'Cài đặt',
      'My Posts': 'Bài đăng của tôi',
      'Track Your Request': 'Theo dõi yêu cầu',
      'Free Services': 'Dịch vụ miễn phí',
      'Personal Information': 'Thông tin cá nhân',
      'Edit Profile': 'Sửa hồ sơ',
      'Change Region': 'Đổi khu vực',
      'Saved Items': 'Mục đã lưu',
      'My Requests': 'Yêu cầu của tôi',
      'Toggle Dark Mode': 'Đổi chế độ tối',
      Logout: 'Đăng xuất'
    },
    fil: {
      Home: 'Home',
      'About Us': 'Tungkol Sa Amin',
      Donate: 'Mag-donate',
      Browse: 'Maghanap',
      Events: 'Events',
      'Donate Us': 'Suportahan Kami',
      Notifications: 'Notifications',
      Messages: 'Messages',
      Settings: 'Settings',
      'My Posts': 'Aking Posts',
      'Track Your Request': 'I-track ang Request',
      'Free Services': 'Free Services',
      'Personal Information': 'Personal na Impormasyon',
      'Edit Profile': 'I-edit ang Profile',
      'Change Region': 'Palitan ang Rehiyon',
      'Saved Items': 'Saved Items',
      'My Requests': 'Aking Requests',
      'Toggle Dark Mode': 'Palitan ang Dark Mode',
      Logout: 'Logout'
    }
  };

  const pageText = {
    ne: {
      'CREATE A LISTING': 'सूची बनाउनुहोस्',
      'Donate something that still matters.': 'अझै उपयोगी सामान दान गर्नुहोस्।',
      'Create a clear donation post with photos, honest condition notes, pickup timing, and location details so receivers can request with confidence.': 'फोटो, इमानदार अवस्था विवरण, लिन आउने समय, र स्थानसहित स्पष्ट दान पोस्ट बनाउनुहोस्, ताकि प्राप्तकर्ताले ढुक्क भएर अनुरोध गर्न सकून्।',
      'DONATION FLOW': 'दान प्रक्रिया',
      'Step 1 of 4': '४ मध्ये चरण १',
      'Step 2 of 4': '४ मध्ये चरण २',
      'Step 3 of 4': '४ मध्ये चरण ३',
      'Step 4 of 4': '४ मध्ये चरण ४',
      'Start with strong images and a clear title so people can trust the listing quickly.': 'राम्रो फोटो र स्पष्ट शीर्षकबाट सुरु गर्नुहोस्, ताकि मानिसहरूले सूचीलाई छिट्टै विश्वास गर्न सकून्।',
      'DONATION DETAILS': 'दान विवरण',
      'Post an item': 'सामान पोस्ट गर्नुहोस्',
      'Add item photos': 'सामानका फोटो थप्नुहोस्',
      'Upload up to 5 images. The first image becomes the main listing photo.': '५ वटासम्म फोटो अपलोड गर्नुहोस्। पहिलो फोटो मुख्य सूची फोटो हुनेछ।',
      'Item name': 'सामानको नाम',
      'e.g. Winter jacket': 'जस्तै: जाडो ज्याकेट',
      'Category': 'श्रेणी',
      'Clothing': 'लुगा',
      'Description': 'विवरण',
      'Describe the item, size, condition, pickup timing, and anything important for the receiver.': 'सामान, आकार, अवस्था, लिन आउने समय, र प्राप्तकर्ताका लागि महत्वपूर्ण कुरा लेख्नुहोस्।',
      'Write clearly so the right person requests it faster.': 'ठीक व्यक्तिले छिटो अनुरोध गर्न सकोस् भनेर स्पष्ट लेख्नुहोस्।',
      'Condition': 'अवस्था',
      'New': 'नयाँ',
      'Like new': 'नयाँ जस्तै',
      'Good': 'राम्रो',
      'Used': 'प्रयोग गरिएको',
      'Pickup type': 'लिने तरिका',
      'Pickup only': 'आफैं लिनुपर्ने',
      'Meet halfway': 'बीचमा भेट्ने',
      'Flexible': 'लचिलो',
      'Best pickup time': 'उत्तम लिन आउने समय',
      'e.g. Weekdays after 6 PM': 'जस्तै: कामका दिन साँझ ६ बजेपछि',
      'City / area': 'शहर / क्षेत्र',
      'e.g. Ulsan, Samsan-dong': 'जस्तै: उल्सान, सामसान-डोङ',
      'Distance radius': 'दूरी सीमा',
      'Within 5 km': '५ किमी भित्र',
      'Within 10 km': '१० किमी भित्र',
      'Within 15 km': '१५ किमी भित्र',
      'Within 30 km': '३० किमी भित्र',
      'Pickup notes': 'लिने सम्बन्धी नोट',
      'Add landmark details, delivery notes, or timing guidance for the receiver.': 'प्राप्तकर्ताका लागि चिनारी ठाउँ, डेलिभरी नोट, वा समय सम्बन्धी जानकारी थप्नुहोस्।',
      'Mark this listing as urgent support needed': 'यो सूचीलाई तत्काल सहयोग आवश्यक भनेर चिन्ह लगाउनुहोस्',
      'Save Draft': 'मस्यौदा बचत गर्नुहोस्',
      'Back': 'पछाडि',
      'Continue': 'जारी राख्नुहोस्',
      'LISTING HEALTH': 'सूची गुणस्तर',
      'Listing score: 20%': 'सूची स्कोर: २०%',
      'Listing score: 35%': 'सूची स्कोर: ३५%',
      'Listing score: 50%': 'सूची स्कोर: ५०%',
      'Listing score: 70%': 'सूची स्कोर: ७०%',
      'Listing score: 100%': 'सूची स्कोर: १००%',
      'Add a title, description, images, and location to make your listing feel more real.': 'सूचीलाई अझ वास्तविक देखाउन शीर्षक, विवरण, फोटो, र स्थान थप्नुहोस्।',
      'Add a title, description, and location to make your post feel complete and trustworthy.': 'पोस्टलाई पूर्ण र भरपर्दो बनाउन शीर्षक, विवरण, र स्थान थप्नुहोस्।',
      'BEST PRACTICE': 'उत्तम अभ्यास',
      'Describe honestly': 'इमानदारीपूर्वक वर्णन गर्नुहोस्',
      'Clear condition notes reduce confusion and lead to smoother pickup conversations.': 'स्पष्ट अवस्था विवरणले अन्योल घटाउँछ र लिन आउने कुराकानी सजिलो बनाउँछ।',
      'LIVE PREVIEW': 'प्रत्यक्ष पूर्वावलोकन',
      'Your listing preview': 'तपाईंको सूची पूर्वावलोकन',
      'Add details and watch this card update live.': 'विवरण थप्नुहोस् र यो कार्ड प्रत्यक्ष अद्यावधिक भएको हेर्नुहोस्।',
      'LISTING CREATED': 'सूची बन्यो',
      'Your item is now live in the app.': 'तपाईंको सामान अब एपमा देखिन्छ।',
      'The new listing has been added to Browse, saved in your local app data, and is ready for requests.': 'नयाँ सूची Browse मा थपिएको छ, तपाईंको स्थानीय एप डेटामा सुरक्षित छ, र अनुरोधका लागि तयार छ।',
      'View in Browse': 'Browse मा हेर्नुहोस्',
      'Create another listing': 'अर्को सूची बनाउनुहोस्'
    }
  };

  function selectedLanguage() {
    return localStorage.getItem(LANGUAGE_KEY) || 'en';
  }

  function normalize(value) {
    return (value || '').replace(/\s+/g, ' ').trim();
  }

  function isLineBreakTitle(element) {
    return element.matches('.page-title, .hero-title');
  }

  function normalizeElementText(element) {
    if (!isLineBreakTitle(element)) return normalize(element.textContent);

    const clone = element.cloneNode(true);
    clone.querySelectorAll('br').forEach((br) => br.replaceWith(' '));
    return normalize(clone.textContent);
  }

  function rememberText(element) {
    if (!element.dataset.pageI18nKey) {
      if (isLineBreakTitle(element) && element.querySelector('br')) {
        element.dataset.pageI18nOriginalHtml = element.innerHTML;
      }
      element.dataset.pageI18nKey = normalizeElementText(element);
    }
    return element.dataset.pageI18nKey;
  }

  function rememberPlaceholder(element) {
    if (!element.dataset.pageI18nPlaceholder) {
      element.dataset.pageI18nPlaceholder = element.getAttribute('placeholder') || '';
    }
    return element.dataset.pageI18nPlaceholder;
  }

  function writeText(element, value) {
    if (isLineBreakTitle(element) && value.includes('<br')) {
      element.innerHTML = value;
      return;
    }
    element.textContent = value;
  }

  function translateTextNodes(lang) {
    const dictionary = { ...(commonText[lang] || {}), ...(pageText[lang] || {}) };
    const selector = 'a,button,span,p,h1,h2,h3,strong,label,option,.mini-label,.eyebrow,.stat-label,.section-title,.page-title';

    document.querySelectorAll(selector).forEach((element) => {
      if (element.closest('.language-selector')) return;
      if (element.children.length && !element.matches('.page-title, .hero-title')) return;

      const key = rememberText(element);
      if (!key) return;

      const translated = dictionary[key];
      if (translated) {
        writeText(element, translated);
      } else if (lang === 'en') {
        if (isLineBreakTitle(element) && element.dataset.pageI18nOriginalHtml) {
          element.innerHTML = element.dataset.pageI18nOriginalHtml;
        } else {
          writeText(element, key);
        }
      }
    });
  }

  function translatePlaceholders(lang) {
    const dictionary = { ...(commonText[lang] || {}), ...(pageText[lang] || {}) };

    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((element) => {
      const key = rememberPlaceholder(element);
      if (!key) return;

      if (dictionary[key]) {
        element.setAttribute('placeholder', dictionary[key]);
      } else if (lang === 'en') {
        element.setAttribute('placeholder', key);
      }
    });
  }

  function translateDynamicScore(lang) {
    const score = document.getElementById('qualityScore');
    if (!score) return;

    if (!score.dataset.pageI18nKey) {
      score.dataset.pageI18nKey = normalize(score.textContent);
    }

    if (lang === 'ne') {
      const percent = (score.textContent.match(/\d+%/) || ['20%'])[0];
      score.textContent = `सूची स्कोर: ${percent.replace(/\d/g, (digit) => '०१२३४५६७८९'[Number(digit)])}`;
    } else if (lang === 'en') {
      score.textContent = score.dataset.pageI18nKey;
    }
  }

  function applyPageLanguage() {
    const lang = selectedLanguage();
    const hasPageDictionary = Boolean(pageText[lang] || commonText[lang]);
    const hasRememberedText = Boolean(document.querySelector('[data-page-i18n-key], [data-page-i18n-placeholder]'));

    if (!hasPageDictionary && (lang !== 'en' || !hasRememberedText)) return;

    document.documentElement.lang = lang;
    translateTextNodes(lang);
    translatePlaceholders(lang);
    translateDynamicScore(lang);
  }

  function updateLanguageSelectors(lang = selectedLanguage()) {
    document.querySelectorAll('.language-selector').forEach((selector) => {
      const options = Array.from(selector.querySelectorAll('.language-selector__option'));
      const active = options.find((option) => option.dataset.lang === lang) || options.find((option) => option.dataset.lang === 'en');
      const code = selector.querySelector('.language-selector__code');

      options.forEach((option) => {
        option.classList.toggle('is-active', option === active);
        option.setAttribute('aria-pressed', option === active ? 'true' : 'false');
      });

      if (code && active) code.textContent = active.dataset.code || 'EN';
    });
  }

  function setLanguage(lang) {
    localStorage.setItem(LANGUAGE_KEY, lang);
    updateLanguageSelectors(lang);
    applyPageLanguage();
    window.dispatchEvent(new CustomEvent('freesewaa-language-change', { detail: { lang } }));
  }

  function scheduleApply() {
    [0, 80, 250, 700, 1400].forEach((delay) => {
      window.setTimeout(() => {
        updateLanguageSelectors();
        applyPageLanguage();
      }, delay);
    });
  }

  document.addEventListener('click', (event) => {
    const option = event.target.closest('.language-selector__option');
    if (!option) return;
    setLanguage(option.dataset.lang || 'en');
    option.closest('.language-selector')?.removeAttribute('open');
  });

  document.addEventListener('input', () => {
    if (selectedLanguage() !== 'en') scheduleApply();
  });

  window.addEventListener('freesewaa-language-controls-ready', scheduleApply);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleApply);
  } else {
    scheduleApply();
  }
})();
