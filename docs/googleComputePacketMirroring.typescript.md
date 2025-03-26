# `googleComputePacketMirroring` Submodule <a name="`googleComputePacketMirroring` Submodule" id="@cdktf/provider-google-beta.googleComputePacketMirroring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePacketMirroring <a name="GoogleComputePacketMirroring" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring google_compute_packet_mirroring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroring(scope: Construct, id: string, config: GoogleComputePacketMirroringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig">GoogleComputePacketMirroringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig">GoogleComputePacketMirroringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putCollectorIlb">putCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putMirroredResources">putMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCollectorIlb` <a name="putCollectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putCollectorIlb"></a>

```typescript
public putCollectorIlb(value: GoogleComputePacketMirroringCollectorIlb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putCollectorIlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putFilter"></a>

```typescript
public putFilter(value: GoogleComputePacketMirroringFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

---

##### `putMirroredResources` <a name="putMirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putMirroredResources"></a>

```typescript
public putMirroredResources(value: GoogleComputePacketMirroringMirroredResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putMirroredResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putNetwork"></a>

```typescript
public putNetwork(value: GoogleComputePacketMirroringNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputePacketMirroringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePacketMirroring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputePacketMirroring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputePacketMirroring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputePacketMirroring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePacketMirroring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference">GoogleComputePacketMirroringCollectorIlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference">GoogleComputePacketMirroringFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference">GoogleComputePacketMirroringMirroredResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.network">network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference">GoogleComputePacketMirroringNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference">GoogleComputePacketMirroringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlbInput">collectorIlbInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResourcesInput">mirroredResourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlb"></a>

```typescript
public readonly collectorIlb: GoogleComputePacketMirroringCollectorIlbOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference">GoogleComputePacketMirroringCollectorIlbOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filter"></a>

```typescript
public readonly filter: GoogleComputePacketMirroringFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference">GoogleComputePacketMirroringFilterOutputReference</a>

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResources"></a>

```typescript
public readonly mirroredResources: GoogleComputePacketMirroringMirroredResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference">GoogleComputePacketMirroringMirroredResourcesOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.network"></a>

```typescript
public readonly network: GoogleComputePacketMirroringNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference">GoogleComputePacketMirroringNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputePacketMirroringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference">GoogleComputePacketMirroringTimeoutsOutputReference</a>

---

##### `collectorIlbInput`<sup>Optional</sup> <a name="collectorIlbInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.collectorIlbInput"></a>

```typescript
public readonly collectorIlbInput: GoogleComputePacketMirroringCollectorIlb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.filterInput"></a>

```typescript
public readonly filterInput: GoogleComputePacketMirroringFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mirroredResourcesInput`<sup>Optional</sup> <a name="mirroredResourcesInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.mirroredResourcesInput"></a>

```typescript
public readonly mirroredResourcesInput: GoogleComputePacketMirroringMirroredResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.networkInput"></a>

```typescript
public readonly networkInput: GoogleComputePacketMirroringNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputePacketMirroringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroring.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePacketMirroringCollectorIlb <a name="GoogleComputePacketMirroringCollectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringCollectorIlb: googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb.property.url">url</a></code> | <code>string</code> | The URL of the forwarding rule. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringConfig <a name="GoogleComputePacketMirroringConfig" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringConfig: googleComputePacketMirroring.GoogleComputePacketMirroringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.collectorIlb">collectorIlb</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a></code> | collector_ilb block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.mirroredResources">mirroredResources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a></code> | mirrored_resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.name">name</a></code> | <code>string</code> | The name of the packet mirroring rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#id GoogleComputePacketMirroring#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.priority">priority</a></code> | <code>number</code> | Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#project GoogleComputePacketMirroring#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectorIlb`<sup>Required</sup> <a name="collectorIlb" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.collectorIlb"></a>

```typescript
public readonly collectorIlb: GoogleComputePacketMirroringCollectorIlb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

collector_ilb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#collector_ilb GoogleComputePacketMirroring#collector_ilb}

---

##### `mirroredResources`<sup>Required</sup> <a name="mirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.mirroredResources"></a>

```typescript
public readonly mirroredResources: GoogleComputePacketMirroringMirroredResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

mirrored_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#mirrored_resources GoogleComputePacketMirroring#mirrored_resources}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the packet mirroring rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#name GoogleComputePacketMirroring#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.network"></a>

```typescript
public readonly network: GoogleComputePacketMirroringNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#network GoogleComputePacketMirroring#network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#description GoogleComputePacketMirroring#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.filter"></a>

```typescript
public readonly filter: GoogleComputePacketMirroringFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#filter GoogleComputePacketMirroring#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#id GoogleComputePacketMirroring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Since only one rule can be active at a time, priority is used to break ties in the case of two rules that apply to the same instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#priority GoogleComputePacketMirroring#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#project GoogleComputePacketMirroring#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#region GoogleComputePacketMirroring#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputePacketMirroringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#timeouts GoogleComputePacketMirroring#timeouts}

---

### GoogleComputePacketMirroringFilter <a name="GoogleComputePacketMirroringFilter" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringFilter: googleComputePacketMirroring.GoogleComputePacketMirroringFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.cidrRanges">cidrRanges</a></code> | <code>string[]</code> | IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.direction">direction</a></code> | <code>string</code> | Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | Possible IP protocols including tcp, udp, icmp and esp. |

---

##### `cidrRanges`<sup>Optional</sup> <a name="cidrRanges" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.cidrRanges"></a>

```typescript
public readonly cidrRanges: string[];
```

- *Type:* string[]

IP CIDR ranges that apply as a filter on the source (ingress) or destination (egress) IP in the IP header.

Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#cidr_ranges GoogleComputePacketMirroring#cidr_ranges}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Direction of traffic to mirror. Default value: "BOTH" Possible values: ["INGRESS", "EGRESS", "BOTH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#direction GoogleComputePacketMirroring#direction}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

Possible IP protocols including tcp, udp, icmp and esp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#ip_protocols GoogleComputePacketMirroring#ip_protocols}

---

### GoogleComputePacketMirroringMirroredResources <a name="GoogleComputePacketMirroringMirroredResources" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringMirroredResources: googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.instances">instances</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]</code> | instances block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.subnetworks">subnetworks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]</code> | subnetworks block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.tags">tags</a></code> | <code>string[]</code> | All instances with these tags will be mirrored. |

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.instances"></a>

```typescript
public readonly instances: IResolvable | GoogleComputePacketMirroringMirroredResourcesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#instances GoogleComputePacketMirroring#instances}

---

##### `subnetworks`<sup>Optional</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.subnetworks"></a>

```typescript
public readonly subnetworks: IResolvable | GoogleComputePacketMirroringMirroredResourcesSubnetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]

subnetworks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#subnetworks GoogleComputePacketMirroring#subnetworks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

All instances with these tags will be mirrored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#tags GoogleComputePacketMirroring#tags}

---

### GoogleComputePacketMirroringMirroredResourcesInstances <a name="GoogleComputePacketMirroringMirroredResourcesInstances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringMirroredResourcesInstances: googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances.property.url">url</a></code> | <code>string</code> | The URL of the instances where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the instances where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringMirroredResourcesSubnetworks <a name="GoogleComputePacketMirroringMirroredResourcesSubnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringMirroredResourcesSubnetworks: googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks.property.url">url</a></code> | <code>string</code> | The URL of the subnetwork where this rule should be active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the subnetwork where this rule should be active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringNetwork <a name="GoogleComputePacketMirroringNetwork" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringNetwork: googleComputePacketMirroring.GoogleComputePacketMirroringNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork.property.url">url</a></code> | <code>string</code> | The full self_link URL of the network where this rule is active. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The full self_link URL of the network where this rule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#url GoogleComputePacketMirroring#url}

---

### GoogleComputePacketMirroringTimeouts <a name="GoogleComputePacketMirroringTimeouts" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

const googleComputePacketMirroringTimeouts: googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#create GoogleComputePacketMirroring#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#delete GoogleComputePacketMirroring#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#update GoogleComputePacketMirroring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#create GoogleComputePacketMirroring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#delete GoogleComputePacketMirroring#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_compute_packet_mirroring#update GoogleComputePacketMirroring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePacketMirroringCollectorIlbOutputReference <a name="GoogleComputePacketMirroringCollectorIlbOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePacketMirroringCollectorIlb;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringCollectorIlb">GoogleComputePacketMirroringCollectorIlb</a>

---


### GoogleComputePacketMirroringFilterOutputReference <a name="GoogleComputePacketMirroringFilterOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetCidrRanges">resetCidrRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrRanges` <a name="resetCidrRanges" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetCidrRanges"></a>

```typescript
public resetCidrRanges(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.resetIpProtocols"></a>

```typescript
public resetIpProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRangesInput">cidrRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRanges">cidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangesInput`<sup>Optional</sup> <a name="cidrRangesInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRangesInput"></a>

```typescript
public readonly cidrRangesInput: string[];
```

- *Type:* string[]

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocolsInput"></a>

```typescript
public readonly ipProtocolsInput: string[];
```

- *Type:* string[]

---

##### `cidrRanges`<sup>Required</sup> <a name="cidrRanges" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.cidrRanges"></a>

```typescript
public readonly cidrRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePacketMirroringFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringFilter">GoogleComputePacketMirroringFilter</a>

---


### GoogleComputePacketMirroringMirroredResourcesInstancesList <a name="GoogleComputePacketMirroringMirroredResourcesInstancesList" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.get"></a>

```typescript
public get(index: number): GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePacketMirroringMirroredResourcesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]

---


### GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference <a name="GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePacketMirroringMirroredResourcesInstances;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>

---


### GoogleComputePacketMirroringMirroredResourcesOutputReference <a name="GoogleComputePacketMirroringMirroredResourcesOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putInstances">putInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks">putSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks">resetSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstances` <a name="putInstances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putInstances"></a>

```typescript
public putInstances(value: IResolvable | GoogleComputePacketMirroringMirroredResourcesInstances[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putInstances.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]

---

##### `putSubnetworks` <a name="putSubnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks"></a>

```typescript
public putSubnetworks(value: IResolvable | GoogleComputePacketMirroringMirroredResourcesSubnetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.putSubnetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]

---

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetInstances"></a>

```typescript
public resetInstances(): void
```

##### `resetSubnetworks` <a name="resetSubnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetSubnetworks"></a>

```typescript
public resetSubnetworks(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instances">instances</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList">GoogleComputePacketMirroringMirroredResourcesInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks">subnetworks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList">GoogleComputePacketMirroringMirroredResourcesSubnetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput">instancesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput">subnetworksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instances"></a>

```typescript
public readonly instances: GoogleComputePacketMirroringMirroredResourcesInstancesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstancesList">GoogleComputePacketMirroringMirroredResourcesInstancesList</a>

---

##### `subnetworks`<sup>Required</sup> <a name="subnetworks" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworks"></a>

```typescript
public readonly subnetworks: GoogleComputePacketMirroringMirroredResourcesSubnetworksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList">GoogleComputePacketMirroringMirroredResourcesSubnetworksList</a>

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: IResolvable | GoogleComputePacketMirroringMirroredResourcesInstances[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesInstances">GoogleComputePacketMirroringMirroredResourcesInstances</a>[]

---

##### `subnetworksInput`<sup>Optional</sup> <a name="subnetworksInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.subnetworksInput"></a>

```typescript
public readonly subnetworksInput: IResolvable | GoogleComputePacketMirroringMirroredResourcesSubnetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePacketMirroringMirroredResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResources">GoogleComputePacketMirroringMirroredResources</a>

---


### GoogleComputePacketMirroringMirroredResourcesSubnetworksList <a name="GoogleComputePacketMirroringMirroredResourcesSubnetworksList" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.get"></a>

```typescript
public get(index: number): GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePacketMirroringMirroredResourcesSubnetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>[]

---


### GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference <a name="GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePacketMirroringMirroredResourcesSubnetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringMirroredResourcesSubnetworks">GoogleComputePacketMirroringMirroredResourcesSubnetworks</a>

---


### GoogleComputePacketMirroringNetworkOutputReference <a name="GoogleComputePacketMirroringNetworkOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputePacketMirroringNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringNetwork">GoogleComputePacketMirroringNetwork</a>

---


### GoogleComputePacketMirroringTimeoutsOutputReference <a name="GoogleComputePacketMirroringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputePacketMirroring } from '@cdktf/provider-google-beta'

new googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputePacketMirroringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputePacketMirroring.GoogleComputePacketMirroringTimeouts">GoogleComputePacketMirroringTimeouts</a>

---



