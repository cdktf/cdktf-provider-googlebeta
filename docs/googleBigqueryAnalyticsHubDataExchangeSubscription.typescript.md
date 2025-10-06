# `googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscription <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription google_bigquery_analytics_hub_data_exchange_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription(scope: Construct, id: string, config: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset">putDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset">resetDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy">resetRefreshPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact">resetSubscriberContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationDataset` <a name="putDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset"></a>

```typescript
public putDestinationDataset(value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---

##### `resetDestinationDataset` <a name="resetDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset"></a>

```typescript
public resetDestinationDataset(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRefreshPolicy` <a name="resetRefreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy"></a>

```typescript
public resetRefreshPolicy(): void
```

##### `resetSubscriberContact` <a name="resetSubscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact"></a>

```typescript
public resetSubscriberContact(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange">dataExchange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime">lastModifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap">linkedDatasetMap</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources">linkedResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail">logLinkedDatasetQueryUserEmail</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName">organizationDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput">dataExchangeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput">dataExchangeProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput">destinationDatasetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput">refreshPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput">subscriberContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation">dataExchangeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject">dataExchangeProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy">refreshPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact">subscriberContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `dataExchange`<sup>Required</sup> <a name="dataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange"></a>

```typescript
public readonly dataExchange: string;
```

- *Type:* string

---

##### `destinationDataset`<sup>Required</sup> <a name="destinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset"></a>

```typescript
public readonly destinationDataset: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a>

---

##### `lastModifyTime`<sup>Required</sup> <a name="lastModifyTime" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime"></a>

```typescript
public readonly lastModifyTime: string;
```

- *Type:* string

---

##### `linkedDatasetMap`<sup>Required</sup> <a name="linkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap"></a>

```typescript
public readonly linkedDatasetMap: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a>

---

##### `linkedResources`<sup>Required</sup> <a name="linkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources"></a>

```typescript
public readonly linkedResources: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a>

---

##### `logLinkedDatasetQueryUserEmail`<sup>Required</sup> <a name="logLinkedDatasetQueryUserEmail" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```typescript
public readonly logLinkedDatasetQueryUserEmail: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationDisplayName`<sup>Required</sup> <a name="organizationDisplayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName"></a>

```typescript
public readonly organizationDisplayName: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `dataExchangeLocationInput`<sup>Optional</sup> <a name="dataExchangeLocationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput"></a>

```typescript
public readonly dataExchangeLocationInput: string;
```

- *Type:* string

---

##### `dataExchangeProjectInput`<sup>Optional</sup> <a name="dataExchangeProjectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput"></a>

```typescript
public readonly dataExchangeProjectInput: string;
```

- *Type:* string

---

##### `destinationDatasetInput`<sup>Optional</sup> <a name="destinationDatasetInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput"></a>

```typescript
public readonly destinationDatasetInput: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `refreshPolicyInput`<sup>Optional</sup> <a name="refreshPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput"></a>

```typescript
public readonly refreshPolicyInput: string;
```

- *Type:* string

---

##### `subscriberContactInput`<sup>Optional</sup> <a name="subscriberContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput"></a>

```typescript
public readonly subscriberContactInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `dataExchangeLocation`<sup>Required</sup> <a name="dataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation"></a>

```typescript
public readonly dataExchangeLocation: string;
```

- *Type:* string

---

##### `dataExchangeProject`<sup>Required</sup> <a name="dataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject"></a>

```typescript
public readonly dataExchangeProject: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `refreshPolicy`<sup>Required</sup> <a name="refreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy"></a>

```typescript
public readonly refreshPolicy: string;
```

- *Type:* string

---

##### `subscriberContact`<sup>Required</sup> <a name="subscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact"></a>

```typescript
public readonly subscriberContact: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSubscriptionConfig: googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation">dataExchangeLocation</a></code> | <code>string</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject">dataExchangeProject</a></code> | <code>string</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset">destinationDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy">refreshPolicy</a></code> | <code>string</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact">subscriberContact</a></code> | <code>string</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `dataExchangeLocation`<sup>Required</sup> <a name="dataExchangeLocation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation"></a>

```typescript
public readonly dataExchangeLocation: string;
```

- *Type:* string

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `dataExchangeProject`<sup>Required</sup> <a name="dataExchangeProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject"></a>

```typescript
public readonly dataExchangeProject: string;
```

- *Type:* string

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `destinationDataset`<sup>Optional</sup> <a name="destinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset"></a>

```typescript
public readonly destinationDataset: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `refreshPolicy`<sup>Optional</sup> <a name="refreshPolicy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy"></a>

```typescript
public readonly refreshPolicy: string;
```

- *Type:* string

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `subscriberContact`<sup>Optional</sup> <a name="subscriberContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact"></a>

```typescript
public readonly subscriberContact: string;
```

- *Type:* string

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset: googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference">datasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location">location</a></code> | <code>string</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description">description</a></code> | <code>string</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName">friendlyName</a></code> | <code>string</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |

---

##### `datasetReference`<sup>Required</sup> <a name="datasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference"></a>

```typescript
public readonly datasetReference: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_reference GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_reference}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#description GoogleBigqueryAnalyticsHubDataExchangeSubscription#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#friendly_name GoogleBigqueryAnalyticsHubDataExchangeSubscription#friendly_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#labels GoogleBigqueryAnalyticsHubDataExchangeSubscription#labels}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference: googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId">datasetId</a></code> | <code>string</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project containing this dataset. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_id}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#project_id}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap: googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap = { ... }
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources: googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources = { ... }
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts: googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference">putDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetReference` <a name="putDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```typescript
public putDatasetReference(value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference">datasetReference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">datasetReferenceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetReference`<sup>Required</sup> <a name="datasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```typescript
public readonly datasetReference: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `datasetReferenceInput`<sup>Optional</sup> <a name="datasetReferenceInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```typescript
public readonly datasetReferenceInput: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get"></a>

```typescript
public get(index: number): GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">linkedDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">linkedPubsubSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing">listing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedDataset`<sup>Required</sup> <a name="linkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```typescript
public readonly linkedDataset: string;
```

- *Type:* string

---

##### `linkedPubsubSubscription`<sup>Required</sup> <a name="linkedPubsubSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```typescript
public readonly linkedPubsubSubscription: string;
```

- *Type:* string

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```typescript
public readonly listing: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get"></a>

```typescript
public get(index: number): GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset">linkedDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing">listing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedDataset`<sup>Required</sup> <a name="linkedDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```typescript
public readonly linkedDataset: string;
```

- *Type:* string

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```typescript
public readonly listing: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchangeSubscription } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

---



