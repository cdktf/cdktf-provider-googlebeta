# `googleLoggingOrganizationBucketConfig` Submodule <a name="`googleLoggingOrganizationBucketConfig` Submodule" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingOrganizationBucketConfig <a name="GoogleLoggingOrganizationBucketConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config google_logging_organization_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig(scope: Construct, id: string, config: GoogleLoggingOrganizationBucketConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig">GoogleLoggingOrganizationBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig">GoogleLoggingOrganizationBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings"></a>

```typescript
public putCmekSettings(value: GoogleLoggingOrganizationBucketConfigCmekSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putIndexConfigs"></a>

```typescript
public putIndexConfigs(value: IResolvable | GoogleLoggingOrganizationBucketConfigIndexConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetCmekSettings"></a>

```typescript
public resetCmekSettings(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetIndexConfigs"></a>

```typescript
public resetIndexConfigs(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleLoggingOrganizationBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingOrganizationBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingOrganizationBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingOrganizationBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference">GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList">GoogleLoggingOrganizationBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference">GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: GoogleLoggingOrganizationBucketConfigIndexConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList">GoogleLoggingOrganizationBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketIdInput"></a>

```typescript
public readonly bucketIdInput: string;
```

- *Type:* string

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.cmekSettingsInput"></a>

```typescript
public readonly cmekSettingsInput: GoogleLoggingOrganizationBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.indexConfigsInput"></a>

```typescript
public readonly indexConfigsInput: IResolvable | GoogleLoggingOrganizationBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingOrganizationBucketConfigCmekSettings <a name="GoogleLoggingOrganizationBucketConfigCmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

const googleLoggingOrganizationBucketConfigCmekSettings: googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings.property.kmsKeyName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#kms_key_name GoogleLoggingOrganizationBucketConfig#kms_key_name}

---

### GoogleLoggingOrganizationBucketConfigConfig <a name="GoogleLoggingOrganizationBucketConfigConfig" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

const googleLoggingOrganizationBucketConfigConfig: googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.organization">organization</a></code> | <code>string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.description">description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#bucket_id GoogleLoggingOrganizationBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#location GoogleLoggingOrganizationBucketConfig#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#organization GoogleLoggingOrganizationBucketConfig#organization}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: GoogleLoggingOrganizationBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#cmek_settings GoogleLoggingOrganizationBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#description GoogleLoggingOrganizationBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#id GoogleLoggingOrganizationBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: IResolvable | GoogleLoggingOrganizationBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#index_configs GoogleLoggingOrganizationBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#retention_days GoogleLoggingOrganizationBucketConfig#retention_days}

---

### GoogleLoggingOrganizationBucketConfigIndexConfigs <a name="GoogleLoggingOrganizationBucketConfigIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

const googleLoggingOrganizationBucketConfigIndexConfigs: googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.type">type</a></code> | <code>string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#field_path GoogleLoggingOrganizationBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_logging_organization_bucket_config#type GoogleLoggingOrganizationBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleLoggingOrganizationBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigCmekSettings">GoogleLoggingOrganizationBucketConfigCmekSettings</a>

---


### GoogleLoggingOrganizationBucketConfigIndexConfigsList <a name="GoogleLoggingOrganizationBucketConfigIndexConfigsList" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.get"></a>

```typescript
public get(index: number): GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingOrganizationBucketConfigIndexConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>[]

---


### GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference <a name="GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer"></a>

```typescript
import { googleLoggingOrganizationBucketConfig } from '@cdktf/provider-google-beta'

new googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleLoggingOrganizationBucketConfigIndexConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleLoggingOrganizationBucketConfig.GoogleLoggingOrganizationBucketConfigIndexConfigs">GoogleLoggingOrganizationBucketConfigIndexConfigs</a>

---



