# `googleVertexAiFeaturestore` Submodule <a name="`googleVertexAiFeaturestore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestore <a name="GoogleVertexAiFeaturestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore google_vertex_ai_featurestore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestore.GoogleVertexAiFeaturestore(scope: Construct, id: string, config?: GoogleVertexAiFeaturestoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig">GoogleVertexAiFeaturestoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig">GoogleVertexAiFeaturestoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig">putOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineServingConfig">resetOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineStorageTtlDays">resetOnlineStorageTtlDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleVertexAiFeaturestoreEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---

##### `putOnlineServingConfig` <a name="putOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig"></a>

```typescript
public putOnlineServingConfig(value: GoogleVertexAiFeaturestoreOnlineServingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiFeaturestoreTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

---

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnlineServingConfig` <a name="resetOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineServingConfig"></a>

```typescript
public resetOnlineServingConfig(): void
```

##### `resetOnlineStorageTtlDays` <a name="resetOnlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineStorageTtlDays"></a>

```typescript
public resetOnlineStorageTtlDays(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeaturestore resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleVertexAiFeaturestore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiFeaturestore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiFeaturestore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference">GoogleVertexAiFeaturestoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfig">onlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference">GoogleVertexAiFeaturestoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfigInput">onlineServingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDaysInput">onlineStorageTtlDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDays">onlineStorageTtlDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiFeaturestoreEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference">GoogleVertexAiFeaturestoreEncryptionSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `onlineServingConfig`<sup>Required</sup> <a name="onlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfig"></a>

```typescript
public readonly onlineServingConfig: GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeaturestoreTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference">GoogleVertexAiFeaturestoreTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleVertexAiFeaturestoreEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onlineServingConfigInput`<sup>Optional</sup> <a name="onlineServingConfigInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfigInput"></a>

```typescript
public readonly onlineServingConfigInput: GoogleVertexAiFeaturestoreOnlineServingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---

##### `onlineStorageTtlDaysInput`<sup>Optional</sup> <a name="onlineStorageTtlDaysInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDaysInput"></a>

```typescript
public readonly onlineStorageTtlDaysInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiFeaturestoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onlineStorageTtlDays`<sup>Required</sup> <a name="onlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDays"></a>

```typescript
public readonly onlineStorageTtlDays: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreConfig <a name="GoogleVertexAiFeaturestoreConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreConfig: googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to this Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.name">name</a></code> | <code>string</code> | The name of the Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineServingConfig">onlineServingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | online_serving_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineStorageTtlDays">onlineStorageTtlDays</a></code> | <code>number</code> | TTL in days for feature values that will be stored in online serving storage. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.region">region</a></code> | <code>string</code> | The region of the dataset. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleVertexAiFeaturestoreEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#encryption_spec GoogleVertexAiFeaturestore#encryption_spec}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, any EntityTypes and Features for this Featurestore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#force_destroy GoogleVertexAiFeaturestore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to this Featurestore.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#labels GoogleVertexAiFeaturestore#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Featurestore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#name GoogleVertexAiFeaturestore#name}

---

##### `onlineServingConfig`<sup>Optional</sup> <a name="onlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineServingConfig"></a>

```typescript
public readonly onlineServingConfig: GoogleVertexAiFeaturestoreOnlineServingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

online_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#online_serving_config GoogleVertexAiFeaturestore#online_serving_config}

---

##### `onlineStorageTtlDays`<sup>Optional</sup> <a name="onlineStorageTtlDays" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineStorageTtlDays"></a>

```typescript
public readonly onlineStorageTtlDays: number;
```

- *Type:* number

TTL in days for feature values that will be stored in online serving storage.

The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#online_storage_ttl_days GoogleVertexAiFeaturestore#online_storage_ttl_days}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the dataset. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#region GoogleVertexAiFeaturestore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiFeaturestoreTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#timeouts GoogleVertexAiFeaturestore#timeouts}

---

### GoogleVertexAiFeaturestoreEncryptionSpec <a name="GoogleVertexAiFeaturestoreEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreEncryptionSpec: googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#kms_key_name GoogleVertexAiFeaturestore#kms_key_name}

---

### GoogleVertexAiFeaturestoreOnlineServingConfig <a name="GoogleVertexAiFeaturestoreOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreOnlineServingConfig: googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount">fixedNodeCount</a></code> | <code>number</code> | The number of nodes for each cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | scaling block. |

---

##### `fixedNodeCount`<sup>Optional</sup> <a name="fixedNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount"></a>

```typescript
public readonly fixedNodeCount: number;
```

- *Type:* number

The number of nodes for each cluster.

The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#fixed_node_count GoogleVertexAiFeaturestore#fixed_node_count}

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.scaling"></a>

```typescript
public readonly scaling: GoogleVertexAiFeaturestoreOnlineServingConfigScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#scaling GoogleVertexAiFeaturestore#scaling}

---

### GoogleVertexAiFeaturestoreOnlineServingConfigScaling <a name="GoogleVertexAiFeaturestoreOnlineServingConfigScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreOnlineServingConfigScaling: googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

The maximum number of nodes to scale up to.

Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#max_node_count GoogleVertexAiFeaturestore#max_node_count}

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#min_node_count GoogleVertexAiFeaturestore#min_node_count}

---

### GoogleVertexAiFeaturestoreTimeouts <a name="GoogleVertexAiFeaturestoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

const googleVertexAiFeaturestoreTimeouts: googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEncryptionSpecOutputReference <a name="GoogleVertexAiFeaturestoreEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---


### GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference <a name="GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling">putScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount">resetFixedNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling">resetScaling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaling` <a name="putScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling"></a>

```typescript
public putScaling(value: GoogleVertexAiFeaturestoreOnlineServingConfigScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `resetFixedNodeCount` <a name="resetFixedNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount"></a>

```typescript
public resetFixedNodeCount(): void
```

##### `resetScaling` <a name="resetScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling"></a>

```typescript
public resetScaling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput">fixedNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput">scalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount">fixedNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling"></a>

```typescript
public readonly scaling: GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a>

---

##### `fixedNodeCountInput`<sup>Optional</sup> <a name="fixedNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput"></a>

```typescript
public readonly fixedNodeCountInput: number;
```

- *Type:* number

---

##### `scalingInput`<sup>Optional</sup> <a name="scalingInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput"></a>

```typescript
public readonly scalingInput: GoogleVertexAiFeaturestoreOnlineServingConfigScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `fixedNodeCount`<sup>Required</sup> <a name="fixedNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount"></a>

```typescript
public readonly fixedNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreOnlineServingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---


### GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference <a name="GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput">maxNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput">minNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCountInput`<sup>Optional</sup> <a name="maxNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput"></a>

```typescript
public readonly maxNodeCountInput: number;
```

- *Type:* number

---

##### `minNodeCountInput`<sup>Optional</sup> <a name="minNodeCountInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput"></a>

```typescript
public readonly minNodeCountInput: number;
```

- *Type:* number

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiFeaturestoreOnlineServingConfigScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---


### GoogleVertexAiFeaturestoreTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiFeaturestore } from '@cdktf/provider-google-beta'

new googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiFeaturestoreTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

---



