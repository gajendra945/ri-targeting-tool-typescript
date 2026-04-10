import React from 'react'

type FilterKey = 'n2pReturn' | 'market' | 'state' | 'ivlGrpSnp' | 'contract' | 'pbp'

type FilterDefinition = {
  key: FilterKey
  options: string[]
}

type FilterValues = Record<FilterKey, string>

const filterDefinitions = [
  {
    key: 'n2pReturn',
    options: ['N2P return', 'All returns', 'New to Plan', 'Returning Members'],
  },
  {
    key: 'market',
    options: ['Market', 'National', 'East', 'West'],
  },
  {
    key: 'state',
    options: ['State', 'AZ', 'CA', 'FL', 'TX'],
  },
  {
    key: 'ivlGrpSnp',
    options: ['IVL/GRP/SNP', 'IVL', 'GRP', 'SNP'],
  },
  {
    key: 'contract',
    options: ['Contract', 'H0544', 'H2228', 'H5216'],
  },
  {
    key: 'pbp',
    options: ['PBP', '001', '004', '010'],
  },
] satisfies FilterDefinition[]

const filterStorageKey = 'ri-targeting-tool-top-filters'

const defaultFilterValues: FilterValues = {
  n2pReturn: 'N2P return',
  market: 'Market',
  state: 'State',
  ivlGrpSnp: 'IVL/GRP/SNP',
  contract: 'Contract',
  pbp: 'PBP',
}

const persistFilters = (filters: FilterValues) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(filterStorageKey, JSON.stringify(filters))
  } catch {
    // Ignore storage failures so the page still renders in restricted browsers.
  }
}

const areFiltersEqual = (left: FilterValues, right: FilterValues) =>
  filterDefinitions.every((filterDefinition) => left[filterDefinition.key] === right[filterDefinition.key])

const normalizeFilters = (candidateFilters: Partial<FilterValues> = {}): FilterValues =>
  filterDefinitions.reduce<FilterValues>((accumulator, filterDefinition) => {
    const candidateValue = candidateFilters[filterDefinition.key]

    accumulator[filterDefinition.key] =
      typeof candidateValue === 'string' && filterDefinition.options.includes(candidateValue)
        ? candidateValue
        : defaultFilterValues[filterDefinition.key]

    return accumulator
  }, { ...defaultFilterValues })

const readStoredFilters = (): FilterValues => {
  if (typeof window === 'undefined') {
    return defaultFilterValues
  }

  try {
    const storedValue = window.localStorage.getItem(filterStorageKey)

    if (!storedValue) {
      return defaultFilterValues
    }

    return normalizeFilters(JSON.parse(storedValue))
  } catch {
    return defaultFilterValues
  }
}

type TopFilterRowProps = {
  className?: string
}

export function TopFilterRow({ className }: TopFilterRowProps) {
  const [appliedFilters, setAppliedFilters] = React.useState(readStoredFilters)
  const [draftFilters, setDraftFilters] = React.useState(readStoredFilters)

  const handleChange = (key: FilterKey, value: string) => {
    setDraftFilters((currentFilters) => ({
      ...currentFilters,
      [key]: value,
    }))
  }

  const handleApplyFilters = () => {
    persistFilters(draftFilters)
    setAppliedFilters(draftFilters)
  }

  const hasPendingChanges = !areFiltersEqual(draftFilters, appliedFilters)

  return (
    <div className={className}>
      {filterDefinitions.map((filter) => (
        <label key={filter.key} className="ri-filter-item ri-filter-item--select">
          <select
            className="ri-filter-select"
            value={draftFilters[filter.key]}
            onChange={(event) => handleChange(filter.key, event.target.value)}
            aria-label={filter.options[0]}
          >
            {filter.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="ri-filter-arrow">&#9660;</span>
        </label>
      ))}
      <button
        type="button"
        className={`ri-filter-apply-btn ${hasPendingChanges ? 'is-pending' : 'is-applied'}`}
        onClick={handleApplyFilters}
      >
        {hasPendingChanges ? 'Apply Filters' : 'Filters Applied'}
      </button>
    </div>
  )
}

type ProductPageStripProps = {
  title: string
  subtitle: string
}

export function ProductPageStrip({ title, subtitle }: ProductPageStripProps) {
  return (
    <section className="ri-page-strip">
      <div className="ri-page-strip-left">
        <h3 className="ri-page-strip-title">{title}</h3>
        <p className="ri-page-strip-subtitle">{subtitle}</p>
      </div>
      <TopFilterRow className="ri-page-filter-row" />
    </section>
  )
}

export default ProductPageStrip
