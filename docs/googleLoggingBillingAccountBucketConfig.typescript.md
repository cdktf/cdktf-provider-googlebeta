# `googleLoggingBillingAccountBucketConfig` Submodule <a name="`googleLoggingBillingAccountBucketConfig` Submodule" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingBillingAccountBucketConfig <a name="GoogleLoggingBillingAccountBucketConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config google_logging_billing_account_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig(scope: Construct, id: string, config: GoogleLoggingBillingAccountBucketConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig">GoogleLoggingBillingAccountBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig">GoogleLoggingBillingAccountBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putCmekSettings"></a>

```typescript
public putCmekSettings(value: GoogleLoggingBillingAccountBucketConfigCmekSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putIndexConfigs"></a>

```typescript
public putIndexConfigs(value: IResolvable | GoogleLoggingBillingAccountBucketConfigIndexConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetCmekSettings"></a>

```typescript
public resetCmekSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetIndexConfigs"></a>

```typescript
public resetIndexConfigs(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingBillingAccountBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleLoggingBillingAccountBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingBillingAccountBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingBillingAccountBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingBillingAccountBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference">GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList">GoogleLoggingBillingAccountBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccountInput">billingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference">GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: GoogleLoggingBillingAccountBucketConfigIndexConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList">GoogleLoggingBillingAccountBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccountInput"></a>

```typescript
public readonly billingAccountInput: string;
```

- *Type:* string

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketIdInput"></a>

```typescript
public readonly bucketIdInput: string;
```

- *Type:* string

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettingsInput"></a>

```typescript
public readonly cmekSettingsInput: GoogleLoggingBillingAccountBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigsInput"></a>

```typescript
public readonly indexConfigsInput: IResolvable | GoogleLoggingBillingAccountBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingBillingAccountBucketConfigCmekSettings <a name="GoogleLoggingBillingAccountBucketConfigCmekSettings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

const googleLoggingBillingAccountBucketConfigCmekSettings: googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#kms_key_name GoogleLoggingBillingAccountBucketConfig#kms_key_name}

---

### GoogleLoggingBillingAccountBucketConfigConfig <a name="GoogleLoggingBillingAccountBucketConfigConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

const googleLoggingBillingAccountBucketConfigConfig: googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.description">description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#id GoogleLoggingBillingAccountBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#billing_account GoogleLoggingBillingAccountBucketConfig#billing_account}

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#bucket_id GoogleLoggingBillingAccountBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#location GoogleLoggingBillingAccountBucketConfig#location}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: GoogleLoggingBillingAccountBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#cmek_settings GoogleLoggingBillingAccountBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#description GoogleLoggingBillingAccountBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#id GoogleLoggingBillingAccountBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: IResolvable | GoogleLoggingBillingAccountBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#index_configs GoogleLoggingBillingAccountBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#retention_days GoogleLoggingBillingAccountBucketConfig#retention_days}

---

### GoogleLoggingBillingAccountBucketConfigIndexConfigs <a name="GoogleLoggingBillingAccountBucketConfigIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

const googleLoggingBillingAccountBucketConfigIndexConfigs: googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.type">type</a></code> | <code>string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#field_path GoogleLoggingBillingAccountBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_logging_billing_account_bucket_config#type GoogleLoggingBillingAccountBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingBillingAccountBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

---


### GoogleLoggingBillingAccountBucketConfigIndexConfigsList <a name="GoogleLoggingBillingAccountBucketConfigIndexConfigsList" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.get"></a>

```typescript
public get(index: number): GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingBillingAccountBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>[]

---


### GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference <a name="GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer"></a>

```typescript
import { googleLoggingBillingAccountBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingBillingAccountBucketConfigIndexConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>

---



