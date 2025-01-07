# `googleBigqueryAnalyticsHubDataExchange` Submodule <a name="`googleBigqueryAnalyticsHubDataExchange` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchange <a name="GoogleBigqueryAnalyticsHubDataExchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange(scope: Construct, id: string, config: GoogleBigqueryAnalyticsHubDataExchangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig">putSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig">resetSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSharingEnvironmentConfig` <a name="putSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig"></a>

```typescript
public putSharingEnvironmentConfig(value: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putSharingEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryAnalyticsHubDataExchangeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetDocumentation"></a>

```typescript
public resetDocumentation(): void
```

##### `resetIcon` <a name="resetIcon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetIcon"></a>

```typescript
public resetIcon(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetPrimaryContact"></a>

```typescript
public resetPrimaryContact(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSharingEnvironmentConfig` <a name="resetSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetSharingEnvironmentConfig"></a>

```typescript
public resetSharingEnvironmentConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubDataExchange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.listingCount">listingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig">sharingEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentationInput">documentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.iconInput">iconInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContactInput">primaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput">sharingEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentation">documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.icon">icon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContact">primaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `listingCount`<sup>Required</sup> <a name="listingCount" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.listingCount"></a>

```typescript
public readonly listingCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharingEnvironmentConfig`<sup>Required</sup> <a name="sharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfig"></a>

```typescript
public readonly sharingEnvironmentConfig: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentationInput"></a>

```typescript
public readonly documentationInput: string;
```

- *Type:* string

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.iconInput"></a>

```typescript
public readonly iconInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContactInput"></a>

```typescript
public readonly primaryContactInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sharingEnvironmentConfigInput`<sup>Optional</sup> <a name="sharingEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.sharingEnvironmentConfigInput"></a>

```typescript
public readonly sharingEnvironmentConfigInput: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryAnalyticsHubDataExchangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* string

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeConfig: googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.location">location</a></code> | <code>string</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.description">description</a></code> | <code>string</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.documentation">documentation</a></code> | <code>string</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.icon">icon</a></code> | <code>string</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#id GoogleBigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.primaryContact">primaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#project GoogleBigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig">sharingEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | sharing_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#data_exchange_id GoogleBigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#display_name GoogleBigqueryAnalyticsHubDataExchange#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#location GoogleBigqueryAnalyticsHubDataExchange#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#description GoogleBigqueryAnalyticsHubDataExchange#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* string

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#documentation GoogleBigqueryAnalyticsHubDataExchange#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#icon GoogleBigqueryAnalyticsHubDataExchange#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#id GoogleBigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#primary_contact GoogleBigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#project GoogleBigqueryAnalyticsHubDataExchange#project}.

---

##### `sharingEnvironmentConfig`<sup>Optional</sup> <a name="sharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.sharingEnvironmentConfig"></a>

```typescript
public readonly sharingEnvironmentConfig: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

sharing_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#sharing_environment_config GoogleBigqueryAnalyticsHubDataExchange#sharing_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryAnalyticsHubDataExchangeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#timeouts GoogleBigqueryAnalyticsHubDataExchange#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig: googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig">dcrExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | dcr_exchange_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig">defaultExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | default_exchange_config block. |

---

##### `dcrExchangeConfig`<sup>Optional</sup> <a name="dcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.dcrExchangeConfig"></a>

```typescript
public readonly dcrExchangeConfig: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

dcr_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#dcr_exchange_config GoogleBigqueryAnalyticsHubDataExchange#dcr_exchange_config}

---

##### `defaultExchangeConfig`<sup>Optional</sup> <a name="defaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig.property.defaultExchangeConfig"></a>

```typescript
public readonly defaultExchangeConfig: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

default_exchange_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#default_exchange_config GoogleBigqueryAnalyticsHubDataExchange#default_exchange_config}

---

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig: googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig = { ... }
```


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig: googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig = { ... }
```


### GoogleBigqueryAnalyticsHubDataExchangeTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

const googleBigqueryAnalyticsHubDataExchangeTimeouts: googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#create GoogleBigqueryAnalyticsHubDataExchange#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#delete GoogleBigqueryAnalyticsHubDataExchange#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#update GoogleBigqueryAnalyticsHubDataExchange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#create GoogleBigqueryAnalyticsHubDataExchange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#delete GoogleBigqueryAnalyticsHubDataExchange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_bigquery_analytics_hub_data_exchange#update GoogleBigqueryAnalyticsHubDataExchange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig">putDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig">putDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig">resetDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig">resetDefaultExchangeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDcrExchangeConfig` <a name="putDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig"></a>

```typescript
public putDcrExchangeConfig(value: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDcrExchangeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `putDefaultExchangeConfig` <a name="putDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig"></a>

```typescript
public putDefaultExchangeConfig(value: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.putDefaultExchangeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `resetDcrExchangeConfig` <a name="resetDcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDcrExchangeConfig"></a>

```typescript
public resetDcrExchangeConfig(): void
```

##### `resetDefaultExchangeConfig` <a name="resetDefaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.resetDefaultExchangeConfig"></a>

```typescript
public resetDefaultExchangeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig">dcrExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig">defaultExchangeConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput">dcrExchangeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput">defaultExchangeConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dcrExchangeConfig`<sup>Required</sup> <a name="dcrExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfig"></a>

```typescript
public readonly dcrExchangeConfig: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfigOutputReference</a>

---

##### `defaultExchangeConfig`<sup>Required</sup> <a name="defaultExchangeConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfig"></a>

```typescript
public readonly defaultExchangeConfig: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfigOutputReference</a>

---

##### `dcrExchangeConfigInput`<sup>Optional</sup> <a name="dcrExchangeConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.dcrExchangeConfigInput"></a>

```typescript
public readonly dcrExchangeConfigInput: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDcrExchangeConfig</a>

---

##### `defaultExchangeConfigInput`<sup>Optional</sup> <a name="defaultExchangeConfigInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.defaultExchangeConfigInput"></a>

```typescript
public readonly defaultExchangeConfigInput: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigDefaultExchangeConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig">GoogleBigqueryAnalyticsHubDataExchangeSharingEnvironmentConfig</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryAnalyticsHubDataExchange } from '@cdktf/provider-google-beta'

new googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryAnalyticsHubDataExchangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchange.GoogleBigqueryAnalyticsHubDataExchangeTimeouts">GoogleBigqueryAnalyticsHubDataExchangeTimeouts</a>

---



