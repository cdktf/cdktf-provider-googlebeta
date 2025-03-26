# `googleColabRuntimeTemplate` Submodule <a name="`googleColabRuntimeTemplate` Submodule" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntimeTemplate <a name="GoogleColabRuntimeTemplate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplate(scope: Construct, id: string, config: GoogleColabRuntimeTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig">GoogleColabRuntimeTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig">GoogleColabRuntimeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec">putDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig">putEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig">putIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec">putNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig">putShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec">resetDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig">resetEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig">resetIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec">resetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec">resetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig">resetShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataPersistentDiskSpec` <a name="putDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```typescript
public putDataPersistentDiskSpec(value: GoogleColabRuntimeTemplateDataPersistentDiskSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: GoogleColabRuntimeTemplateEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `putEucConfig` <a name="putEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig"></a>

```typescript
public putEucConfig(value: GoogleColabRuntimeTemplateEucConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `putIdleShutdownConfig` <a name="putIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig"></a>

```typescript
public putIdleShutdownConfig(value: GoogleColabRuntimeTemplateIdleShutdownConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec"></a>

```typescript
public putMachineSpec(value: GoogleColabRuntimeTemplateMachineSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `putNetworkSpec` <a name="putNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec"></a>

```typescript
public putNetworkSpec(value: GoogleColabRuntimeTemplateNetworkSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `putShieldedVmConfig` <a name="putShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig"></a>

```typescript
public putShieldedVmConfig(value: GoogleColabRuntimeTemplateShieldedVmConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig"></a>

```typescript
public putSoftwareConfig(value: GoogleColabRuntimeTemplateSoftwareConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleColabRuntimeTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---

##### `resetDataPersistentDiskSpec` <a name="resetDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```typescript
public resetDataPersistentDiskSpec(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec"></a>

```typescript
public resetEncryptionSpec(): void
```

##### `resetEucConfig` <a name="resetEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig"></a>

```typescript
public resetEucConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleShutdownConfig` <a name="resetIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```typescript
public resetIdleShutdownConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMachineSpec` <a name="resetMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec"></a>

```typescript
public resetMachineSpec(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkSpec` <a name="resetNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec"></a>

```typescript
public resetNetworkSpec(): void
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags"></a>

```typescript
public resetNetworkTags(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetShieldedVmConfig` <a name="resetShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig"></a>

```typescript
public resetShieldedVmConfig(): void
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig"></a>

```typescript
public resetSoftwareConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleColabRuntimeTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput">dataPersistentDiskSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput">eucConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput">idleShutdownConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput">networkSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput">networkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput">shieldedVmConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags">networkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataPersistentDiskSpec`<sup>Required</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```typescript
public readonly dataPersistentDiskSpec: GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleColabRuntimeTemplateEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `eucConfig`<sup>Required</sup> <a name="eucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig"></a>

```typescript
public readonly eucConfig: GoogleColabRuntimeTemplateEucConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `idleShutdownConfig`<sup>Required</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig"></a>

```typescript
public readonly idleShutdownConfig: GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec"></a>

```typescript
public readonly machineSpec: GoogleColabRuntimeTemplateMachineSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `networkSpec`<sup>Required</sup> <a name="networkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec"></a>

```typescript
public readonly networkSpec: GoogleColabRuntimeTemplateNetworkSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `shieldedVmConfig`<sup>Required</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig"></a>

```typescript
public readonly shieldedVmConfig: GoogleColabRuntimeTemplateShieldedVmConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig"></a>

```typescript
public readonly softwareConfig: GoogleColabRuntimeTemplateSoftwareConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleColabRuntimeTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `dataPersistentDiskSpecInput`<sup>Optional</sup> <a name="dataPersistentDiskSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```typescript
public readonly dataPersistentDiskSpecInput: GoogleColabRuntimeTemplateDataPersistentDiskSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: GoogleColabRuntimeTemplateEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `eucConfigInput`<sup>Optional</sup> <a name="eucConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput"></a>

```typescript
public readonly eucConfigInput: GoogleColabRuntimeTemplateEucConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleShutdownConfigInput`<sup>Optional</sup> <a name="idleShutdownConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```typescript
public readonly idleShutdownConfigInput: GoogleColabRuntimeTemplateIdleShutdownConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput"></a>

```typescript
public readonly machineSpecInput: GoogleColabRuntimeTemplateMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkSpecInput`<sup>Optional</sup> <a name="networkSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput"></a>

```typescript
public readonly networkSpecInput: GoogleColabRuntimeTemplateNetworkSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput"></a>

```typescript
public readonly networkTagsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `shieldedVmConfigInput`<sup>Optional</sup> <a name="shieldedVmConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```typescript
public readonly shieldedVmConfigInput: GoogleColabRuntimeTemplateShieldedVmConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput"></a>

```typescript
public readonly softwareConfigInput: GoogleColabRuntimeTemplateSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleColabRuntimeTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeTemplateConfig <a name="GoogleColabRuntimeTemplateConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateConfig: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName">displayName</a></code> | <code>string</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location">location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description">description</a></code> | <code>string</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name">name</a></code> | <code>string</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags">networkTags</a></code> | <code>string[]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#display_name GoogleColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#location GoogleColabRuntimeTemplate#location}

---

##### `dataPersistentDiskSpec`<sup>Optional</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```typescript
public readonly dataPersistentDiskSpec: GoogleColabRuntimeTemplateDataPersistentDiskSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#data_persistent_disk_spec GoogleColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#description GoogleColabRuntimeTemplate#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: GoogleColabRuntimeTemplateEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#encryption_spec GoogleColabRuntimeTemplate#encryption_spec}

---

##### `eucConfig`<sup>Optional</sup> <a name="eucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig"></a>

```typescript
public readonly eucConfig: GoogleColabRuntimeTemplateEucConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#euc_config GoogleColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleShutdownConfig`<sup>Optional</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```typescript
public readonly idleShutdownConfig: GoogleColabRuntimeTemplateIdleShutdownConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#idle_shutdown_config GoogleColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#labels GoogleColabRuntimeTemplate#labels}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec"></a>

```typescript
public readonly machineSpec: GoogleColabRuntimeTemplateMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#machine_spec GoogleColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `networkSpec`<sup>Optional</sup> <a name="networkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec"></a>

```typescript
public readonly networkSpec: GoogleColabRuntimeTemplateNetworkSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#network_spec GoogleColabRuntimeTemplate#network_spec}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags"></a>

```typescript
public readonly networkTags: string[];
```

- *Type:* string[]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#network_tags GoogleColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}.

---

##### `shieldedVmConfig`<sup>Optional</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```typescript
public readonly shieldedVmConfig: GoogleColabRuntimeTemplateShieldedVmConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#shielded_vm_config GoogleColabRuntimeTemplate#shielded_vm_config}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig"></a>

```typescript
public readonly softwareConfig: GoogleColabRuntimeTemplateSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#software_config GoogleColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleColabRuntimeTemplateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#timeouts GoogleColabRuntimeTemplate#timeouts}

---

### GoogleColabRuntimeTemplateDataPersistentDiskSpec <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateDataPersistentDiskSpec: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">diskType</a></code> | <code>string</code> | The type of the persistent disk. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#disk_size_gb GoogleColabRuntimeTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#disk_type GoogleColabRuntimeTemplate#disk_type}

---

### GoogleColabRuntimeTemplateEncryptionSpec <a name="GoogleColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateEncryptionSpec: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#kms_key_name GoogleColabRuntimeTemplate#kms_key_name}

---

### GoogleColabRuntimeTemplateEucConfig <a name="GoogleColabRuntimeTemplateEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateEucConfig: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled">eucDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable end user credential access for the runtime. |

---

##### `eucDisabled`<sup>Optional</sup> <a name="eucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```typescript
public readonly eucDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#euc_disabled GoogleColabRuntimeTemplate#euc_disabled}

---

### GoogleColabRuntimeTemplateIdleShutdownConfig <a name="GoogleColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateIdleShutdownConfig: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | The duration after which the runtime is automatically shut down. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#idle_timeout GoogleColabRuntimeTemplate#idle_timeout}

---

### GoogleColabRuntimeTemplateMachineSpec <a name="GoogleColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateMachineSpec: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType">machineType</a></code> | <code>string</code> | The Compute Engine machine type selected for the runtime. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#accelerator_count GoogleColabRuntimeTemplate#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#accelerator_type GoogleColabRuntimeTemplate#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#machine_type GoogleColabRuntimeTemplate#machine_type}

---

### GoogleColabRuntimeTemplateNetworkSpec <a name="GoogleColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateNetworkSpec: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network">network</a></code> | <code>string</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name of the subnetwork that this runtime is in. |

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#enable_internet_access GoogleColabRuntimeTemplate#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#network GoogleColabRuntimeTemplate#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#subnetwork GoogleColabRuntimeTemplate#subnetwork}

---

### GoogleColabRuntimeTemplateShieldedVmConfig <a name="GoogleColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateShieldedVmConfig: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables secure boot for the runtime. |

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#enable_secure_boot GoogleColabRuntimeTemplate#enable_secure_boot}

---

### GoogleColabRuntimeTemplateSoftwareConfig <a name="GoogleColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateSoftwareConfig: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env">env</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">postStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env"></a>

```typescript
public readonly env: IResolvable | GoogleColabRuntimeTemplateSoftwareConfigEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#env GoogleColabRuntimeTemplate#env}

---

##### `postStartupScriptConfig`<sup>Optional</sup> <a name="postStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```typescript
public readonly postStartupScriptConfig: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#post_startup_script_config GoogleColabRuntimeTemplate#post_startup_script_config}

---

### GoogleColabRuntimeTemplateSoftwareConfigEnv <a name="GoogleColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateSoftwareConfigEnv: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name">name</a></code> | <code>string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value">value</a></code> | <code>string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#value GoogleColabRuntimeTemplate#value}

---

### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">postStartupScriptBehavior</a></code> | <code>string</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">postStartupScriptUrl</a></code> | <code>string</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#post_startup_script GoogleColabRuntimeTemplate#post_startup_script}

---

##### `postStartupScriptBehavior`<sup>Optional</sup> <a name="postStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```typescript
public readonly postStartupScriptBehavior: string;
```

- *Type:* string

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#post_startup_script_behavior GoogleColabRuntimeTemplate#post_startup_script_behavior}

---

##### `postStartupScriptUrl`<sup>Optional</sup> <a name="postStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```typescript
public readonly postStartupScriptUrl: string;
```

- *Type:* string

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#post_startup_script_url GoogleColabRuntimeTemplate#post_startup_script_url}

---

### GoogleColabRuntimeTemplateTimeouts <a name="GoogleColabRuntimeTemplateTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

const googleColabRuntimeTemplateTimeouts: googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```typescript
public resetDiskSizeGb(): void
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```typescript
public resetDiskType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```typescript
public readonly diskSizeGbInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateDataPersistentDiskSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### GoogleColabRuntimeTemplateEncryptionSpecOutputReference <a name="GoogleColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---


### GoogleColabRuntimeTemplateEucConfigOutputReference <a name="GoogleColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">resetEucDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEucDisabled` <a name="resetEucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```typescript
public resetEucDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">eucDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">eucDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eucDisabledInput`<sup>Optional</sup> <a name="eucDisabledInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```typescript
public readonly eucDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eucDisabled`<sup>Required</sup> <a name="eucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```typescript
public readonly eucDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateEucConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---


### GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateIdleShutdownConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---


### GoogleColabRuntimeTemplateMachineSpecOutputReference <a name="GoogleColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```typescript
public resetAcceleratorCount(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```typescript
public resetMachineType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```typescript
public readonly acceleratorCountInput: number;
```

- *Type:* number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```typescript
public readonly machineTypeInput: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: number;
```

- *Type:* number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```typescript
public readonly machineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateMachineSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---


### GoogleColabRuntimeTemplateNetworkSpecOutputReference <a name="GoogleColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```typescript
public resetEnableInternetAccess(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```typescript
public readonly enableInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateNetworkSpec;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---


### GoogleColabRuntimeTemplateShieldedVmConfigOutputReference <a name="GoogleColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```typescript
public resetEnableSecureBoot(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateShieldedVmConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvList <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```typescript
public get(index: number): GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleColabRuntimeTemplateSoftwareConfigEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleColabRuntimeTemplateSoftwareConfigEnv;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">putPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">resetPostStartupScriptConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```typescript
public putEnv(value: IResolvable | GoogleColabRuntimeTemplateSoftwareConfigEnv[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]

---

##### `putPostStartupScriptConfig` <a name="putPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```typescript
public putPostStartupScriptConfig(value: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```typescript
public resetEnv(): void
```

##### `resetPostStartupScriptConfig` <a name="resetPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```typescript
public resetPostStartupScriptConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">postStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">envInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">postStartupScriptConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```typescript
public readonly env: GoogleColabRuntimeTemplateSoftwareConfigEnvList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `postStartupScriptConfig`<sup>Required</sup> <a name="postStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```typescript
public readonly postStartupScriptConfig: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```typescript
public readonly envInput: IResolvable | GoogleColabRuntimeTemplateSoftwareConfigEnv[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>[]

---

##### `postStartupScriptConfigInput`<sup>Optional</sup> <a name="postStartupScriptConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```typescript
public readonly postStartupScriptConfigInput: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateSoftwareConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">resetPostStartupScriptBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">resetPostStartupScriptUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```typescript
public resetPostStartupScript(): void
```

##### `resetPostStartupScriptBehavior` <a name="resetPostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```typescript
public resetPostStartupScriptBehavior(): void
```

##### `resetPostStartupScriptUrl` <a name="resetPostStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```typescript
public resetPostStartupScriptUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">postStartupScriptBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">postStartupScriptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">postStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">postStartupScriptBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">postStartupScriptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postStartupScriptBehaviorInput`<sup>Optional</sup> <a name="postStartupScriptBehaviorInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```typescript
public readonly postStartupScriptBehaviorInput: string;
```

- *Type:* string

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```typescript
public readonly postStartupScriptInput: string;
```

- *Type:* string

---

##### `postStartupScriptUrlInput`<sup>Optional</sup> <a name="postStartupScriptUrlInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```typescript
public readonly postStartupScriptUrlInput: string;
```

- *Type:* string

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```typescript
public readonly postStartupScript: string;
```

- *Type:* string

---

##### `postStartupScriptBehavior`<sup>Required</sup> <a name="postStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```typescript
public readonly postStartupScriptBehavior: string;
```

- *Type:* string

---

##### `postStartupScriptUrl`<sup>Required</sup> <a name="postStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```typescript
public readonly postStartupScriptUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### GoogleColabRuntimeTemplateTimeoutsOutputReference <a name="GoogleColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleColabRuntimeTemplate } from '@cdktf/provider-google-beta'

new googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleColabRuntimeTemplateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---



