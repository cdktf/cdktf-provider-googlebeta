# `googleTpuV2Vm` Submodule <a name="`googleTpuV2Vm` Submodule" id="@cdktf/provider-google-beta.googleTpuV2Vm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTpuV2Vm <a name="GoogleTpuV2Vm" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm google_tpu_v2_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2Vm(scope: Construct, id: string, config: GoogleTpuV2VmConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig">GoogleTpuV2VmConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig">GoogleTpuV2VmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig">putAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks">putDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs">putNetworkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig">putSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount">putServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorConfig">resetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDataDisks">resetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfigs">resetNetworkConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetSchedulingConfig">resetSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAcceleratorConfig` <a name="putAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig"></a>

```typescript
public putAcceleratorConfig(value: GoogleTpuV2VmAcceleratorConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---

##### `putDataDisks` <a name="putDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks"></a>

```typescript
public putDataDisks(value: IResolvable | GoogleTpuV2VmDataDisks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putDataDisks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleTpuV2VmNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---

##### `putNetworkConfigs` <a name="putNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs"></a>

```typescript
public putNetworkConfigs(value: IResolvable | GoogleTpuV2VmNetworkConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putNetworkConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]

---

##### `putSchedulingConfig` <a name="putSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig"></a>

```typescript
public putSchedulingConfig(value: GoogleTpuV2VmSchedulingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putSchedulingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---

##### `putServiceAccount` <a name="putServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount"></a>

```typescript
public putServiceAccount(value: GoogleTpuV2VmServiceAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig"></a>

```typescript
public putShieldedInstanceConfig(value: GoogleTpuV2VmShieldedInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleTpuV2VmTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

---

##### `resetAcceleratorConfig` <a name="resetAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorConfig"></a>

```typescript
public resetAcceleratorConfig(): void
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetAcceleratorType"></a>

```typescript
public resetAcceleratorType(): void
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetDataDisks` <a name="resetDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDataDisks"></a>

```typescript
public resetDataDisks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetNetworkConfigs` <a name="resetNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetNetworkConfigs"></a>

```typescript
public resetNetworkConfigs(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSchedulingConfig` <a name="resetSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetSchedulingConfig"></a>

```typescript
public resetSchedulingConfig(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetShieldedInstanceConfig"></a>

```typescript
public resetShieldedInstanceConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

googleTpuV2Vm.GoogleTpuV2Vm.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleTpuV2Vm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleTpuV2Vm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTpuV2Vm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference">GoogleTpuV2VmAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisks">dataDisks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList">GoogleTpuV2VmDataDisksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.healthDescription">healthDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.multisliceNode">multisliceNode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference">GoogleTpuV2VmNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigs">networkConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList">GoogleTpuV2VmNetworkConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkEndpoints">networkEndpoints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList">GoogleTpuV2VmNetworkEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.queuedResource">queuedResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference">GoogleTpuV2VmSchedulingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference">GoogleTpuV2VmServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference">GoogleTpuV2VmShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.symptoms">symptoms</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList">GoogleTpuV2VmSymptomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference">GoogleTpuV2VmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfigInput">acceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisksInput">dataDisksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigsInput">networkConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfigInput">schedulingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccountInput">serviceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceleratorConfig`<sup>Required</sup> <a name="acceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfig"></a>

```typescript
public readonly acceleratorConfig: GoogleTpuV2VmAcceleratorConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference">GoogleTpuV2VmAcceleratorConfigOutputReference</a>

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `dataDisks`<sup>Required</sup> <a name="dataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisks"></a>

```typescript
public readonly dataDisks: GoogleTpuV2VmDataDisksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList">GoogleTpuV2VmDataDisksList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `healthDescription`<sup>Required</sup> <a name="healthDescription" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.healthDescription"></a>

```typescript
public readonly healthDescription: string;
```

- *Type:* string

---

##### `multisliceNode`<sup>Required</sup> <a name="multisliceNode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.multisliceNode"></a>

```typescript
public readonly multisliceNode: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleTpuV2VmNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference">GoogleTpuV2VmNetworkConfigOutputReference</a>

---

##### `networkConfigs`<sup>Required</sup> <a name="networkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigs"></a>

```typescript
public readonly networkConfigs: GoogleTpuV2VmNetworkConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList">GoogleTpuV2VmNetworkConfigsList</a>

---

##### `networkEndpoints`<sup>Required</sup> <a name="networkEndpoints" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkEndpoints"></a>

```typescript
public readonly networkEndpoints: GoogleTpuV2VmNetworkEndpointsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList">GoogleTpuV2VmNetworkEndpointsList</a>

---

##### `queuedResource`<sup>Required</sup> <a name="queuedResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.queuedResource"></a>

```typescript
public readonly queuedResource: string;
```

- *Type:* string

---

##### `schedulingConfig`<sup>Required</sup> <a name="schedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: GoogleTpuV2VmSchedulingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference">GoogleTpuV2VmSchedulingConfigOutputReference</a>

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleTpuV2VmServiceAccountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference">GoogleTpuV2VmServiceAccountOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleTpuV2VmShieldedInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference">GoogleTpuV2VmShieldedInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `symptoms`<sup>Required</sup> <a name="symptoms" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.symptoms"></a>

```typescript
public readonly symptoms: GoogleTpuV2VmSymptomsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList">GoogleTpuV2VmSymptomsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleTpuV2VmTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference">GoogleTpuV2VmTimeoutsOutputReference</a>

---

##### `acceleratorConfigInput`<sup>Optional</sup> <a name="acceleratorConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorConfigInput"></a>

```typescript
public readonly acceleratorConfigInput: GoogleTpuV2VmAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorTypeInput"></a>

```typescript
public readonly acceleratorTypeInput: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `dataDisksInput`<sup>Optional</sup> <a name="dataDisksInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.dataDisksInput"></a>

```typescript
public readonly dataDisksInput: IResolvable | GoogleTpuV2VmDataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleTpuV2VmNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---

##### `networkConfigsInput`<sup>Optional</sup> <a name="networkConfigsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.networkConfigsInput"></a>

```typescript
public readonly networkConfigsInput: IResolvable | GoogleTpuV2VmNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `schedulingConfigInput`<sup>Optional</sup> <a name="schedulingConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.schedulingConfigInput"></a>

```typescript
public readonly schedulingConfigInput: GoogleTpuV2VmSchedulingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: GoogleTpuV2VmServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.shieldedInstanceConfigInput"></a>

```typescript
public readonly shieldedInstanceConfigInput: GoogleTpuV2VmShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleTpuV2VmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2Vm.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTpuV2VmAcceleratorConfig <a name="GoogleTpuV2VmAcceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmAcceleratorConfig: googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.topology">topology</a></code> | <code>string</code> | Topology of TPU in chips. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.type">type</a></code> | <code>string</code> | Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type. |

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.topology"></a>

```typescript
public readonly topology: string;
```

- *Type:* string

Topology of TPU in chips.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#topology GoogleTpuV2Vm#topology}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#type GoogleTpuV2Vm#type}

---

### GoogleTpuV2VmConfig <a name="GoogleTpuV2VmConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmConfig: googleTpuV2Vm.GoogleTpuV2VmConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.name">name</a></code> | <code>string</code> | The immutable name of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Runtime version for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorConfig">acceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorType">acceleratorType</a></code> | <code>string</code> | TPU accelerator type for the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | The CIDR block that the TPU node will use when selecting an IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dataDisks">dataDisks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]</code> | data_disks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.description">description</a></code> | <code>string</code> | Text description of the TPU. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfigs">networkConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]</code> | network_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.schedulingConfig">schedulingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | scheduling_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.serviceAccount">serviceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.tags">tags</a></code> | <code>string[]</code> | Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.zone">zone</a></code> | <code>string</code> | The GCP location for the TPU. If it is not provided, the provider zone is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The immutable name of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#name GoogleTpuV2Vm#name}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Runtime version for the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#runtime_version GoogleTpuV2Vm#runtime_version}

---

##### `acceleratorConfig`<sup>Optional</sup> <a name="acceleratorConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorConfig"></a>

```typescript
public readonly acceleratorConfig: GoogleTpuV2VmAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#accelerator_config GoogleTpuV2Vm#accelerator_config}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.acceleratorType"></a>

```typescript
public readonly acceleratorType: string;
```

- *Type:* string

TPU accelerator type for the TPU.

'accelerator_type' cannot be used at the same time as
'accelerator_config'. If neither is specified, 'accelerator_type' defaults to 'v2-8'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#accelerator_type GoogleTpuV2Vm#accelerator_type}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

The CIDR block that the TPU node will use when selecting an IP address.

This CIDR block must
be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
block would be wasteful (a node can only consume one IP address). Errors will occur if the
CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
with any subnetworks in the user's provided network, or the provided network is peered with
another network that is using that CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#cidr_block GoogleTpuV2Vm#cidr_block}

---

##### `dataDisks`<sup>Optional</sup> <a name="dataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.dataDisks"></a>

```typescript
public readonly dataDisks: IResolvable | GoogleTpuV2VmDataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#data_disks GoogleTpuV2Vm#data_disks}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Text description of the TPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#description GoogleTpuV2Vm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#labels GoogleTpuV2Vm#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#metadata GoogleTpuV2Vm#metadata}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleTpuV2VmNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#network_config GoogleTpuV2Vm#network_config}

---

##### `networkConfigs`<sup>Optional</sup> <a name="networkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.networkConfigs"></a>

```typescript
public readonly networkConfigs: IResolvable | GoogleTpuV2VmNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]

network_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#network_configs GoogleTpuV2Vm#network_configs}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}.

---

##### `schedulingConfig`<sup>Optional</sup> <a name="schedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.schedulingConfig"></a>

```typescript
public readonly schedulingConfig: GoogleTpuV2VmSchedulingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

scheduling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#scheduling_config GoogleTpuV2Vm#scheduling_config}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: GoogleTpuV2VmServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#service_account GoogleTpuV2Vm#service_account}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.shieldedInstanceConfig"></a>

```typescript
public readonly shieldedInstanceConfig: GoogleTpuV2VmShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#shielded_instance_config GoogleTpuV2Vm#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#tags GoogleTpuV2Vm#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleTpuV2VmTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#timeouts GoogleTpuV2Vm#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The GCP location for the TPU. If it is not provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#zone GoogleTpuV2Vm#zone}

---

### GoogleTpuV2VmDataDisks <a name="GoogleTpuV2VmDataDisks" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmDataDisks: googleTpuV2Vm.GoogleTpuV2VmDataDisks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.mode">mode</a></code> | <code>string</code> | The mode in which to attach this disk. |

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#source_disk GoogleTpuV2Vm#source_disk}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The mode in which to attach this disk.

If not specified, the default is READ_WRITE
mode. Only applicable to dataDisks. Default value: "READ_WRITE" Possible values: ["READ_WRITE", "READ_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#mode GoogleTpuV2Vm#mode}

---

### GoogleTpuV2VmNetworkConfig <a name="GoogleTpuV2VmNetworkConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmNetworkConfig: googleTpuV2Vm.GoogleTpuV2VmNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.enableExternalIps">enableExternalIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.network">network</a></code> | <code>string</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.queueCount">queueCount</a></code> | <code>number</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name of the subnetwork for the TPU node. |

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

##### `enableExternalIps`<sup>Optional</sup> <a name="enableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.enableExternalIps"></a>

```typescript
public readonly enableExternalIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

### GoogleTpuV2VmNetworkConfigs <a name="GoogleTpuV2VmNetworkConfigs" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmNetworkConfigs: googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allows the TPU node to send and receive packets with non-matching destination or source IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.enableExternalIps">enableExternalIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates that external IP addresses would be associated with the TPU workers. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.network">network</a></code> | <code>string</code> | The name of the network for the TPU node. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.queueCount">queueCount</a></code> | <code>number</code> | Specifies networking queue count for TPU VM instance's network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.subnetwork">subnetwork</a></code> | <code>string</code> | The name of the subnetwork for the TPU node. |

---

##### `canIpForward`<sup>Optional</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allows the TPU node to send and receive packets with non-matching destination or source IPs.

This is required if you plan to use the TPU workers to forward routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}

---

##### `enableExternalIps`<sup>Optional</sup> <a name="enableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.enableExternalIps"></a>

```typescript
public readonly enableExternalIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates that external IP addresses would be associated with the TPU workers.

If set to
false, the specified subnetwork or network should have Private Google Access enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The name of the network for the TPU node.

It must be a preexisting Google Compute Engine
network. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}

---

##### `queueCount`<sup>Optional</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

Specifies networking queue count for TPU VM instance's network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The name of the subnetwork for the TPU node.

It must be a preexisting Google Compute
Engine subnetwork. If none is provided, "default" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}

---

### GoogleTpuV2VmNetworkEndpoints <a name="GoogleTpuV2VmNetworkEndpoints" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmNetworkEndpoints: googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints = { ... }
```


### GoogleTpuV2VmNetworkEndpointsAccessConfig <a name="GoogleTpuV2VmNetworkEndpointsAccessConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmNetworkEndpointsAccessConfig: googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig = { ... }
```


### GoogleTpuV2VmSchedulingConfig <a name="GoogleTpuV2VmSchedulingConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmSchedulingConfig: googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the node is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.reserved">reserved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the node is created under a reservation. |

---

##### `preemptible`<sup>Optional</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the node is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#preemptible GoogleTpuV2Vm#preemptible}

---

##### `reserved`<sup>Optional</sup> <a name="reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig.property.reserved"></a>

```typescript
public readonly reserved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the node is created under a reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#reserved GoogleTpuV2Vm#reserved}

---

### GoogleTpuV2VmServiceAccount <a name="GoogleTpuV2VmServiceAccount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmServiceAccount: googleTpuV2Vm.GoogleTpuV2VmServiceAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.email">email</a></code> | <code>string</code> | Email address of the service account. If empty, default Compute service account will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.scope">scope</a></code> | <code>string[]</code> | The list of scopes to be made available for this service account. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address of the service account. If empty, default Compute service account will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#email GoogleTpuV2Vm#email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

The list of scopes to be made available for this service account.

If empty, access to all
Cloud APIs will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#scope GoogleTpuV2Vm#scope}

---

### GoogleTpuV2VmShieldedInstanceConfig <a name="GoogleTpuV2VmShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmShieldedInstanceConfig: googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#enable_secure_boot GoogleTpuV2Vm#enable_secure_boot}

---

### GoogleTpuV2VmSymptoms <a name="GoogleTpuV2VmSymptoms" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmSymptoms: googleTpuV2Vm.GoogleTpuV2VmSymptoms = { ... }
```


### GoogleTpuV2VmTimeouts <a name="GoogleTpuV2VmTimeouts" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

const googleTpuV2VmTimeouts: googleTpuV2Vm.GoogleTpuV2VmTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTpuV2VmAcceleratorConfigOutputReference <a name="GoogleTpuV2VmAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topologyInput">topologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topology">topology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topologyInput`<sup>Optional</sup> <a name="topologyInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topologyInput"></a>

```typescript
public readonly topologyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.topology"></a>

```typescript
public readonly topology: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmAcceleratorConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmAcceleratorConfig">GoogleTpuV2VmAcceleratorConfig</a>

---


### GoogleTpuV2VmDataDisksList <a name="GoogleTpuV2VmDataDisksList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmDataDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get"></a>

```typescript
public get(index: number): GoogleTpuV2VmDataDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2VmDataDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>[]

---


### GoogleTpuV2VmDataDisksOutputReference <a name="GoogleTpuV2VmDataDisksOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDiskInput">sourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDisk">sourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sourceDiskInput`<sup>Optional</sup> <a name="sourceDiskInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDiskInput"></a>

```typescript
public readonly sourceDiskInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.sourceDisk"></a>

```typescript
public readonly sourceDisk: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2VmDataDisks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmDataDisks">GoogleTpuV2VmDataDisks</a>

---


### GoogleTpuV2VmNetworkConfigOutputReference <a name="GoogleTpuV2VmNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetEnableExternalIps">resetEnableExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetCanIpForward"></a>

```typescript
public resetCanIpForward(): void
```

##### `resetEnableExternalIps` <a name="resetEnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetEnableExternalIps"></a>

```typescript
public resetEnableExternalIps(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetQueueCount"></a>

```typescript
public resetQueueCount(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForwardInput">canIpForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIpsInput">enableExternalIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIps">enableExternalIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCount">queueCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForwardInput"></a>

```typescript
public readonly canIpForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExternalIpsInput`<sup>Optional</sup> <a name="enableExternalIpsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIpsInput"></a>

```typescript
public readonly enableExternalIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCountInput"></a>

```typescript
public readonly queueCountInput: number;
```

- *Type:* number

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExternalIps`<sup>Required</sup> <a name="enableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.enableExternalIps"></a>

```typescript
public readonly enableExternalIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfig">GoogleTpuV2VmNetworkConfig</a>

---


### GoogleTpuV2VmNetworkConfigsList <a name="GoogleTpuV2VmNetworkConfigsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get"></a>

```typescript
public get(index: number): GoogleTpuV2VmNetworkConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2VmNetworkConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>[]

---


### GoogleTpuV2VmNetworkConfigsOutputReference <a name="GoogleTpuV2VmNetworkConfigsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetCanIpForward">resetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetEnableExternalIps">resetEnableExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetQueueCount">resetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanIpForward` <a name="resetCanIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetCanIpForward"></a>

```typescript
public resetCanIpForward(): void
```

##### `resetEnableExternalIps` <a name="resetEnableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetEnableExternalIps"></a>

```typescript
public resetEnableExternalIps(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetQueueCount` <a name="resetQueueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetQueueCount"></a>

```typescript
public resetQueueCount(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForwardInput">canIpForwardInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIpsInput">enableExternalIpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCountInput">queueCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForward">canIpForward</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIps">enableExternalIps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCount">queueCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `canIpForwardInput`<sup>Optional</sup> <a name="canIpForwardInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForwardInput"></a>

```typescript
public readonly canIpForwardInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExternalIpsInput`<sup>Optional</sup> <a name="enableExternalIpsInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIpsInput"></a>

```typescript
public readonly enableExternalIpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `queueCountInput`<sup>Optional</sup> <a name="queueCountInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCountInput"></a>

```typescript
public readonly queueCountInput: number;
```

- *Type:* number

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `canIpForward`<sup>Required</sup> <a name="canIpForward" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.canIpForward"></a>

```typescript
public readonly canIpForward: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableExternalIps`<sup>Required</sup> <a name="enableExternalIps" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.enableExternalIps"></a>

```typescript
public readonly enableExternalIps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `queueCount`<sup>Required</sup> <a name="queueCount" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.queueCount"></a>

```typescript
public readonly queueCount: number;
```

- *Type:* number

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2VmNetworkConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkConfigs">GoogleTpuV2VmNetworkConfigs</a>

---


### GoogleTpuV2VmNetworkEndpointsAccessConfigList <a name="GoogleTpuV2VmNetworkEndpointsAccessConfigList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get"></a>

```typescript
public get(index: number): GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference <a name="GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig">GoogleTpuV2VmNetworkEndpointsAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmNetworkEndpointsAccessConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfig">GoogleTpuV2VmNetworkEndpointsAccessConfig</a>

---


### GoogleTpuV2VmNetworkEndpointsList <a name="GoogleTpuV2VmNetworkEndpointsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get"></a>

```typescript
public get(index: number): GoogleTpuV2VmNetworkEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleTpuV2VmNetworkEndpointsOutputReference <a name="GoogleTpuV2VmNetworkEndpointsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.accessConfig">accessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList">GoogleTpuV2VmNetworkEndpointsAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints">GoogleTpuV2VmNetworkEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessConfig`<sup>Required</sup> <a name="accessConfig" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.accessConfig"></a>

```typescript
public readonly accessConfig: GoogleTpuV2VmNetworkEndpointsAccessConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsAccessConfigList">GoogleTpuV2VmNetworkEndpointsAccessConfigList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmNetworkEndpoints;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmNetworkEndpoints">GoogleTpuV2VmNetworkEndpoints</a>

---


### GoogleTpuV2VmSchedulingConfigOutputReference <a name="GoogleTpuV2VmSchedulingConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetPreemptible">resetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetReserved">resetReserved</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreemptible` <a name="resetPreemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetPreemptible"></a>

```typescript
public resetPreemptible(): void
```

##### `resetReserved` <a name="resetReserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.resetReserved"></a>

```typescript
public resetReserved(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptibleInput">preemptibleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reservedInput">reservedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptible">preemptible</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reserved">reserved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preemptibleInput`<sup>Optional</sup> <a name="preemptibleInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptibleInput"></a>

```typescript
public readonly preemptibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reservedInput`<sup>Optional</sup> <a name="reservedInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reservedInput"></a>

```typescript
public readonly reservedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preemptible`<sup>Required</sup> <a name="preemptible" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.preemptible"></a>

```typescript
public readonly preemptible: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.reserved"></a>

```typescript
public readonly reserved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmSchedulingConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSchedulingConfig">GoogleTpuV2VmSchedulingConfig</a>

---


### GoogleTpuV2VmServiceAccountOutputReference <a name="GoogleTpuV2VmServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scopeInput">scopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scope">scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.scope"></a>

```typescript
public readonly scope: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmServiceAccount;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmServiceAccount">GoogleTpuV2VmServiceAccount</a>

---


### GoogleTpuV2VmShieldedInstanceConfigOutputReference <a name="GoogleTpuV2VmShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```typescript
public readonly enableSecureBootInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```typescript
public readonly enableSecureBoot: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmShieldedInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmShieldedInstanceConfig">GoogleTpuV2VmShieldedInstanceConfig</a>

---


### GoogleTpuV2VmSymptomsList <a name="GoogleTpuV2VmSymptomsList" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmSymptomsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get"></a>

```typescript
public get(index: number): GoogleTpuV2VmSymptomsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleTpuV2VmSymptomsOutputReference <a name="GoogleTpuV2VmSymptomsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.details">details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.symptomType">symptomType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.workerId">workerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms">GoogleTpuV2VmSymptoms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.details"></a>

```typescript
public readonly details: string;
```

- *Type:* string

---

##### `symptomType`<sup>Required</sup> <a name="symptomType" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.symptomType"></a>

```typescript
public readonly symptomType: string;
```

- *Type:* string

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptomsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTpuV2VmSymptoms;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmSymptoms">GoogleTpuV2VmSymptoms</a>

---


### GoogleTpuV2VmTimeoutsOutputReference <a name="GoogleTpuV2VmTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleTpuV2Vm } from '@cdktf/provider-google-beta'

new googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTpuV2VmTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTpuV2Vm.GoogleTpuV2VmTimeouts">GoogleTpuV2VmTimeouts</a>

---



