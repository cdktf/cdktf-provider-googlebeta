# `googleComputeResourcePolicy` Submodule <a name="`googleComputeResourcePolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeResourcePolicy <a name="GoogleComputeResourcePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy google_compute_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicy(scope: Construct, id: string, config: GoogleComputeResourcePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig">GoogleComputeResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig">GoogleComputeResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putDiskConsistencyGroupPolicy">putDiskConsistencyGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putGroupPlacementPolicy">putGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putInstanceSchedulePolicy">putInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putSnapshotSchedulePolicy">putSnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDiskConsistencyGroupPolicy">resetDiskConsistencyGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetGroupPlacementPolicy">resetGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetInstanceSchedulePolicy">resetInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetSnapshotSchedulePolicy">resetSnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiskConsistencyGroupPolicy` <a name="putDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putDiskConsistencyGroupPolicy"></a>

```typescript
public putDiskConsistencyGroupPolicy(value: GoogleComputeResourcePolicyDiskConsistencyGroupPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putDiskConsistencyGroupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---

##### `putGroupPlacementPolicy` <a name="putGroupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putGroupPlacementPolicy"></a>

```typescript
public putGroupPlacementPolicy(value: GoogleComputeResourcePolicyGroupPlacementPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putGroupPlacementPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

---

##### `putInstanceSchedulePolicy` <a name="putInstanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putInstanceSchedulePolicy"></a>

```typescript
public putInstanceSchedulePolicy(value: GoogleComputeResourcePolicyInstanceSchedulePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putInstanceSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---

##### `putSnapshotSchedulePolicy` <a name="putSnapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putSnapshotSchedulePolicy"></a>

```typescript
public putSnapshotSchedulePolicy(value: GoogleComputeResourcePolicySnapshotSchedulePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putSnapshotSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeResourcePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDiskConsistencyGroupPolicy` <a name="resetDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetDiskConsistencyGroupPolicy"></a>

```typescript
public resetDiskConsistencyGroupPolicy(): void
```

##### `resetGroupPlacementPolicy` <a name="resetGroupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetGroupPlacementPolicy"></a>

```typescript
public resetGroupPlacementPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceSchedulePolicy` <a name="resetInstanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetInstanceSchedulePolicy"></a>

```typescript
public resetInstanceSchedulePolicy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSnapshotSchedulePolicy` <a name="resetSnapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetSnapshotSchedulePolicy"></a>

```typescript
public resetSnapshotSchedulePolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference">GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference">GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference">GoogleComputeResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicyInput">diskConsistencyGroupPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicyInput">groupPlacementPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicyInput">instanceSchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicyInput">snapshotSchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `diskConsistencyGroupPolicy`<sup>Required</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy"></a>

```typescript
public readonly diskConsistencyGroupPolicy: GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference">GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference</a>

---

##### `groupPlacementPolicy`<sup>Required</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicy"></a>

```typescript
public readonly groupPlacementPolicy: GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference">GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference</a>

---

##### `instanceSchedulePolicy`<sup>Required</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicy"></a>

```typescript
public readonly instanceSchedulePolicy: GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `snapshotSchedulePolicy`<sup>Required</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicy"></a>

```typescript
public readonly snapshotSchedulePolicy: GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeResourcePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference">GoogleComputeResourcePolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `diskConsistencyGroupPolicyInput`<sup>Optional</sup> <a name="diskConsistencyGroupPolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.diskConsistencyGroupPolicyInput"></a>

```typescript
public readonly diskConsistencyGroupPolicyInput: GoogleComputeResourcePolicyDiskConsistencyGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---

##### `groupPlacementPolicyInput`<sup>Optional</sup> <a name="groupPlacementPolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.groupPlacementPolicyInput"></a>

```typescript
public readonly groupPlacementPolicyInput: GoogleComputeResourcePolicyGroupPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceSchedulePolicyInput`<sup>Optional</sup> <a name="instanceSchedulePolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.instanceSchedulePolicyInput"></a>

```typescript
public readonly instanceSchedulePolicyInput: GoogleComputeResourcePolicyInstanceSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `snapshotSchedulePolicyInput`<sup>Optional</sup> <a name="snapshotSchedulePolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.snapshotSchedulePolicyInput"></a>

```typescript
public readonly snapshotSchedulePolicyInput: GoogleComputeResourcePolicySnapshotSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeResourcePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeResourcePolicyConfig <a name="GoogleComputeResourcePolicyConfig" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyConfig: googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | disk_consistency_group_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | group_placement_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#id GoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | instance_schedule_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#project GoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.region">region</a></code> | <code>string</code> | Region where resource policy resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | snapshot_schedule_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#name GoogleComputeResourcePolicy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#description GoogleComputeResourcePolicy#description}

---

##### `diskConsistencyGroupPolicy`<sup>Optional</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.diskConsistencyGroupPolicy"></a>

```typescript
public readonly diskConsistencyGroupPolicy: GoogleComputeResourcePolicyDiskConsistencyGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

disk_consistency_group_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#disk_consistency_group_policy GoogleComputeResourcePolicy#disk_consistency_group_policy}

---

##### `groupPlacementPolicy`<sup>Optional</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.groupPlacementPolicy"></a>

```typescript
public readonly groupPlacementPolicy: GoogleComputeResourcePolicyGroupPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

group_placement_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#group_placement_policy GoogleComputeResourcePolicy#group_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#id GoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceSchedulePolicy`<sup>Optional</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.instanceSchedulePolicy"></a>

```typescript
public readonly instanceSchedulePolicy: GoogleComputeResourcePolicyInstanceSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

instance_schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#instance_schedule_policy GoogleComputeResourcePolicy#instance_schedule_policy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#project GoogleComputeResourcePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where resource policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#region GoogleComputeResourcePolicy#region}

---

##### `snapshotSchedulePolicy`<sup>Optional</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.snapshotSchedulePolicy"></a>

```typescript
public readonly snapshotSchedulePolicy: GoogleComputeResourcePolicySnapshotSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

snapshot_schedule_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#snapshot_schedule_policy GoogleComputeResourcePolicy#snapshot_schedule_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeResourcePolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#timeouts GoogleComputeResourcePolicy#timeouts}

---

### GoogleComputeResourcePolicyDiskConsistencyGroupPolicy <a name="GoogleComputeResourcePolicyDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyDiskConsistencyGroupPolicy: googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable disk consistency on the resource policy. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable disk consistency on the resource policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#enabled GoogleComputeResourcePolicy#enabled}

---

### GoogleComputeResourcePolicyGroupPlacementPolicy <a name="GoogleComputeResourcePolicyGroupPlacementPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyGroupPlacementPolicy: googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.availabilityDomainCount">availabilityDomainCount</a></code> | <code>number</code> | The number of availability domains instances will be spread across. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.collocation">collocation</a></code> | <code>string</code> | Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.maxDistance">maxDistance</a></code> | <code>number</code> | Specifies the number of max logical switches. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.vmCount">vmCount</a></code> | <code>number</code> | Number of VMs in this placement group. |

---

##### `availabilityDomainCount`<sup>Optional</sup> <a name="availabilityDomainCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.availabilityDomainCount"></a>

```typescript
public readonly availabilityDomainCount: number;
```

- *Type:* number

The number of availability domains instances will be spread across.

If two instances are in different
availability domain, they will not be put in the same low latency network

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#availability_domain_count GoogleComputeResourcePolicy#availability_domain_count}

---

##### `collocation`<sup>Optional</sup> <a name="collocation" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.collocation"></a>

```typescript
public readonly collocation: string;
```

- *Type:* string

Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.

Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
attached. Possible values: ["COLLOCATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#collocation GoogleComputeResourcePolicy#collocation}

---

##### `maxDistance`<sup>Optional</sup> <a name="maxDistance" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.maxDistance"></a>

```typescript
public readonly maxDistance: number;
```

- *Type:* number

Specifies the number of max logical switches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#max_distance GoogleComputeResourcePolicy#max_distance}

---

##### `vmCount`<sup>Optional</sup> <a name="vmCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy.property.vmCount"></a>

```typescript
public readonly vmCount: number;
```

- *Type:* number

Number of VMs in this placement group.

Google does not recommend that you use this field
unless you use a compact policy and you want your policy to work only if it contains this
exact number of VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#vm_count GoogleComputeResourcePolicy#vm_count}

---

### GoogleComputeResourcePolicyInstanceSchedulePolicy <a name="GoogleComputeResourcePolicyInstanceSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyInstanceSchedulePolicy: googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.timeZone">timeZone</a></code> | <code>string</code> | Specifies the time zone to be used in interpreting the schedule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.expirationTime">expirationTime</a></code> | <code>string</code> | The expiration time of the schedule. The timestamp is an RFC3339 string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.startTime">startTime</a></code> | <code>string</code> | The start time of the schedule. The timestamp is an RFC3339 string. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStartSchedule">vmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | vm_start_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStopSchedule">vmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | vm_stop_schedule block. |

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Specifies the time zone to be used in interpreting the schedule.

The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#time_zone GoogleComputeResourcePolicy#time_zone}

---

##### `expirationTime`<sup>Optional</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

The expiration time of the schedule. The timestamp is an RFC3339 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#expiration_time GoogleComputeResourcePolicy#expiration_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The start time of the schedule. The timestamp is an RFC3339 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

##### `vmStartSchedule`<sup>Optional</sup> <a name="vmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStartSchedule"></a>

```typescript
public readonly vmStartSchedule: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

vm_start_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#vm_start_schedule GoogleComputeResourcePolicy#vm_start_schedule}

---

##### `vmStopSchedule`<sup>Optional</sup> <a name="vmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy.property.vmStopSchedule"></a>

```typescript
public readonly vmStopSchedule: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

vm_stop_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#vm_stop_schedule GoogleComputeResourcePolicy#vm_stop_schedule}

---

### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule: googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.property.schedule">schedule</a></code> | <code>string</code> | Specifies the frequency for the operation, using the unix-cron format. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Specifies the frequency for the operation, using the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#schedule GoogleComputeResourcePolicy#schedule}

---

### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule: googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.property.schedule">schedule</a></code> | <code>string</code> | Specifies the frequency for the operation, using the unix-cron format. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Specifies the frequency for the operation, using the unix-cron format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#schedule GoogleComputeResourcePolicy#schedule}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicy <a name="GoogleComputeResourcePolicySnapshotSchedulePolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicy: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.snapshotProperties">snapshotProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | snapshot_properties block. |

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.schedule"></a>

```typescript
public readonly schedule: GoogleComputeResourcePolicySnapshotSchedulePolicySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#schedule GoogleComputeResourcePolicy#schedule}

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#retention_policy GoogleComputeResourcePolicy#retention_policy}

---

##### `snapshotProperties`<sup>Optional</sup> <a name="snapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy.property.snapshotProperties"></a>

```typescript
public readonly snapshotProperties: GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

snapshot_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#snapshot_properties GoogleComputeResourcePolicy#snapshot_properties}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | Maximum age of the snapshot that is allowed to be kept. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.onSourceDiskDelete">onSourceDiskDelete</a></code> | <code>string</code> | Specifies the behavior to apply to scheduled snapshots when the source disk is deleted. |

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

Maximum age of the snapshot that is allowed to be kept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#max_retention_days GoogleComputeResourcePolicy#max_retention_days}

---

##### `onSourceDiskDelete`<sup>Optional</sup> <a name="onSourceDiskDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.onSourceDiskDelete"></a>

```typescript
public readonly onSourceDiskDelete: string;
```

- *Type:* string

Specifies the behavior to apply to scheduled snapshots when the source disk is deleted.

Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#on_source_disk_delete GoogleComputeResourcePolicy#on_source_disk_delete}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicySchedule: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#daily_schedule GoogleComputeResourcePolicy#daily_schedule}

---

##### `hourlySchedule`<sup>Optional</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#hourly_schedule GoogleComputeResourcePolicy#hourly_schedule}

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#weekly_schedule GoogleComputeResourcePolicy#weekly_schedule}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.daysInCycle">daysInCycle</a></code> | <code>number</code> | Defines a schedule with units measured in days. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.startTime">startTime</a></code> | <code>string</code> | This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. |

---

##### `daysInCycle`<sup>Required</sup> <a name="daysInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.daysInCycle"></a>

```typescript
public readonly daysInCycle: number;
```

- *Type:* number

Defines a schedule with units measured in days.

The value determines how many days pass between the start of each cycle. Days in cycle for snapshot schedule policy must be 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#days_in_cycle GoogleComputeResourcePolicy#days_in_cycle}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00.

For example,
both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.hoursInCycle">hoursInCycle</a></code> | <code>number</code> | The number of hours between snapshots. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.startTime">startTime</a></code> | <code>string</code> | Time within the window to start the operations. |

---

##### `hoursInCycle`<sup>Required</sup> <a name="hoursInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.hoursInCycle"></a>

```typescript
public readonly hoursInCycle: number;
```

- *Type:* number

The number of hours between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#hours_in_cycle GoogleComputeResourcePolicy#hours_in_cycle}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Time within the window to start the operations.

It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT. eg: 21:00

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.property.dayOfWeeks">dayOfWeeks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]</code> | day_of_weeks block. |

---

##### `dayOfWeeks`<sup>Required</sup> <a name="dayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.property.dayOfWeeks"></a>

```typescript
public readonly dayOfWeeks: IResolvable | GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]

day_of_weeks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#day_of_weeks GoogleComputeResourcePolicy#day_of_weeks}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.day">day</a></code> | <code>string</code> | The day of the week to create the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.startTime">startTime</a></code> | <code>string</code> | Time within the window to start the operations. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

The day of the week to create the snapshot.

e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#day GoogleComputeResourcePolicy#day}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Time within the window to start the operations.

It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#start_time GoogleComputeResourcePolicy#start_time}

---

### GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties <a name="GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties: googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.chainName">chainName</a></code> | <code>string</code> | Creates the new snapshot in the snapshot chain labeled with the specified name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.guestFlush">guestFlush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to perform a 'guest aware' snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key-value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | Cloud Storage bucket location to store the auto snapshot (regional or multi-regional). |

---

##### `chainName`<sup>Optional</sup> <a name="chainName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.chainName"></a>

```typescript
public readonly chainName: string;
```

- *Type:* string

Creates the new snapshot in the snapshot chain labeled with the specified name.

The chain name must be 1-63 characters long and comply
with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#chain_name GoogleComputeResourcePolicy#chain_name}

---

##### `guestFlush`<sup>Optional</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.guestFlush"></a>

```typescript
public readonly guestFlush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to perform a 'guest aware' snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#guest_flush GoogleComputeResourcePolicy#guest_flush}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#labels GoogleComputeResourcePolicy#labels}

---

##### `storageLocations`<sup>Optional</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

Cloud Storage bucket location to store the auto snapshot (regional or multi-regional).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#storage_locations GoogleComputeResourcePolicy#storage_locations}

---

### GoogleComputeResourcePolicyTimeouts <a name="GoogleComputeResourcePolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

const googleComputeResourcePolicyTimeouts: googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#create GoogleComputeResourcePolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#delete GoogleComputeResourcePolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#update GoogleComputeResourcePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#create GoogleComputeResourcePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#delete GoogleComputeResourcePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_compute_resource_policy#update GoogleComputeResourcePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference <a name="GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicyDiskConsistencyGroupPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyDiskConsistencyGroupPolicy">GoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---


### GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference <a name="GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetAvailabilityDomainCount">resetAvailabilityDomainCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetCollocation">resetCollocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetMaxDistance">resetMaxDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetVmCount">resetVmCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityDomainCount` <a name="resetAvailabilityDomainCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetAvailabilityDomainCount"></a>

```typescript
public resetAvailabilityDomainCount(): void
```

##### `resetCollocation` <a name="resetCollocation" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetCollocation"></a>

```typescript
public resetCollocation(): void
```

##### `resetMaxDistance` <a name="resetMaxDistance" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetMaxDistance"></a>

```typescript
public resetMaxDistance(): void
```

##### `resetVmCount` <a name="resetVmCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resetVmCount"></a>

```typescript
public resetVmCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCountInput">availabilityDomainCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocationInput">collocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistanceInput">maxDistanceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCountInput">vmCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount">availabilityDomainCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation">collocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistance">maxDistance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount">vmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomainCountInput`<sup>Optional</sup> <a name="availabilityDomainCountInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCountInput"></a>

```typescript
public readonly availabilityDomainCountInput: number;
```

- *Type:* number

---

##### `collocationInput`<sup>Optional</sup> <a name="collocationInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocationInput"></a>

```typescript
public readonly collocationInput: string;
```

- *Type:* string

---

##### `maxDistanceInput`<sup>Optional</sup> <a name="maxDistanceInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistanceInput"></a>

```typescript
public readonly maxDistanceInput: number;
```

- *Type:* number

---

##### `vmCountInput`<sup>Optional</sup> <a name="vmCountInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCountInput"></a>

```typescript
public readonly vmCountInput: number;
```

- *Type:* number

---

##### `availabilityDomainCount`<sup>Required</sup> <a name="availabilityDomainCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount"></a>

```typescript
public readonly availabilityDomainCount: number;
```

- *Type:* number

---

##### `collocation`<sup>Required</sup> <a name="collocation" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation"></a>

```typescript
public readonly collocation: string;
```

- *Type:* string

---

##### `maxDistance`<sup>Required</sup> <a name="maxDistance" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistance"></a>

```typescript
public readonly maxDistance: number;
```

- *Type:* number

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount"></a>

```typescript
public readonly vmCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicyGroupPlacementPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyGroupPlacementPolicy">GoogleComputeResourcePolicyGroupPlacementPolicy</a>

---


### GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule">putVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule">putVmStopSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetExpirationTime">resetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStartSchedule">resetVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStopSchedule">resetVmStopSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVmStartSchedule` <a name="putVmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule"></a>

```typescript
public putVmStartSchedule(value: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---

##### `putVmStopSchedule` <a name="putVmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule"></a>

```typescript
public putVmStopSchedule(value: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---

##### `resetExpirationTime` <a name="resetExpirationTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetExpirationTime"></a>

```typescript
public resetExpirationTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetVmStartSchedule` <a name="resetVmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStartSchedule"></a>

```typescript
public resetVmStartSchedule(): void
```

##### `resetVmStopSchedule` <a name="resetVmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStopSchedule"></a>

```typescript
public resetVmStopSchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule">vmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule">vmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTimeInput">expirationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartScheduleInput">vmStartScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopScheduleInput">vmStopScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vmStartSchedule`<sup>Required</sup> <a name="vmStartSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule"></a>

```typescript
public readonly vmStartSchedule: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference</a>

---

##### `vmStopSchedule`<sup>Required</sup> <a name="vmStopSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule"></a>

```typescript
public readonly vmStopSchedule: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference</a>

---

##### `expirationTimeInput`<sup>Optional</sup> <a name="expirationTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTimeInput"></a>

```typescript
public readonly expirationTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `vmStartScheduleInput`<sup>Optional</sup> <a name="vmStartScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartScheduleInput"></a>

```typescript
public readonly vmStartScheduleInput: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---

##### `vmStopScheduleInput`<sup>Optional</sup> <a name="vmStopScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopScheduleInput"></a>

```typescript
public readonly vmStopScheduleInput: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicyInstanceSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicy">GoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---


### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---


### GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference <a name="GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">GoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties">putSnapshotProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetSnapshotProperties">resetSnapshotProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy"></a>

```typescript
public putRetentionPolicy(value: GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule"></a>

```typescript
public putSchedule(value: GoogleComputeResourcePolicySnapshotSchedulePolicySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---

##### `putSnapshotProperties` <a name="putSnapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties"></a>

```typescript
public putSnapshotProperties(value: GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetRetentionPolicy"></a>

```typescript
public resetRetentionPolicy(): void
```

##### `resetSnapshotProperties` <a name="resetSnapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetSnapshotProperties"></a>

```typescript
public resetSnapshotProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties">snapshotProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotPropertiesInput">snapshotPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule"></a>

```typescript
public readonly schedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference</a>

---

##### `snapshotProperties`<sup>Required</sup> <a name="snapshotProperties" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties"></a>

```typescript
public readonly snapshotProperties: GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference</a>

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicyInput"></a>

```typescript
public readonly retentionPolicyInput: GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: GoogleComputeResourcePolicySnapshotSchedulePolicySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---

##### `snapshotPropertiesInput`<sup>Optional</sup> <a name="snapshotPropertiesInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotPropertiesInput"></a>

```typescript
public readonly snapshotPropertiesInput: GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicy">GoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resetOnSourceDiskDelete">resetOnSourceDiskDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnSourceDiskDelete` <a name="resetOnSourceDiskDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resetOnSourceDiskDelete"></a>

```typescript
public resetOnSourceDiskDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDaysInput">maxRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDeleteInput">onSourceDiskDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays">maxRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete">onSourceDiskDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxRetentionDaysInput`<sup>Optional</sup> <a name="maxRetentionDaysInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDaysInput"></a>

```typescript
public readonly maxRetentionDaysInput: number;
```

- *Type:* number

---

##### `onSourceDiskDeleteInput`<sup>Optional</sup> <a name="onSourceDiskDeleteInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDeleteInput"></a>

```typescript
public readonly onSourceDiskDeleteInput: string;
```

- *Type:* string

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays"></a>

```typescript
public readonly maxRetentionDays: number;
```

- *Type:* number

---

##### `onSourceDiskDelete`<sup>Required</sup> <a name="onSourceDiskDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete"></a>

```typescript
public readonly onSourceDiskDelete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">GoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycleInput">daysInCycleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle">daysInCycle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysInCycleInput`<sup>Optional</sup> <a name="daysInCycleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycleInput"></a>

```typescript
public readonly daysInCycleInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `daysInCycle`<sup>Required</sup> <a name="daysInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle"></a>

```typescript
public readonly daysInCycle: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycleInput">hoursInCycleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle">hoursInCycle</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInCycleInput`<sup>Optional</sup> <a name="hoursInCycleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycleInput"></a>

```typescript
public readonly hoursInCycleInput: number;
```

- *Type:* number

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `hoursInCycle`<sup>Required</sup> <a name="hoursInCycle" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle"></a>

```typescript
public readonly hoursInCycle: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule">putDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule">putHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule">putWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetHourlySchedule">resetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDailySchedule` <a name="putDailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule"></a>

```typescript
public putDailySchedule(value: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---

##### `putHourlySchedule` <a name="putHourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule"></a>

```typescript
public putHourlySchedule(value: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---

##### `putWeeklySchedule` <a name="putWeeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule"></a>

```typescript
public putWeeklySchedule(value: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetHourlySchedule` <a name="resetHourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetHourlySchedule"></a>

```typescript
public resetHourlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlyScheduleInput">hourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule"></a>

```typescript
public readonly hourlySchedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference</a>

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---

##### `hourlyScheduleInput`<sup>Optional</sup> <a name="hourlyScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlyScheduleInput"></a>

```typescript
public readonly hourlyScheduleInput: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get"></a>

```typescript
public get(index: number): GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks">putDayOfWeeks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDayOfWeeks` <a name="putDayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks"></a>

```typescript
public putDayOfWeeks(value: IResolvable | GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks">dayOfWeeks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeksInput">dayOfWeeksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeeks`<sup>Required</sup> <a name="dayOfWeeks" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks"></a>

```typescript
public readonly dayOfWeeks: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a>

---

##### `dayOfWeeksInput`<sup>Optional</sup> <a name="dayOfWeeksInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeksInput"></a>

```typescript
public readonly dayOfWeeksInput: IResolvable | GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">GoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---


### GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference <a name="GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetChainName">resetChainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetGuestFlush">resetGuestFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetStorageLocations">resetStorageLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChainName` <a name="resetChainName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetChainName"></a>

```typescript
public resetChainName(): void
```

##### `resetGuestFlush` <a name="resetGuestFlush" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetGuestFlush"></a>

```typescript
public resetGuestFlush(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetStorageLocations` <a name="resetStorageLocations" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetStorageLocations"></a>

```typescript
public resetStorageLocations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainNameInput">chainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlushInput">guestFlushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocationsInput">storageLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName">chainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush">guestFlush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations">storageLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chainNameInput`<sup>Optional</sup> <a name="chainNameInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainNameInput"></a>

```typescript
public readonly chainNameInput: string;
```

- *Type:* string

---

##### `guestFlushInput`<sup>Optional</sup> <a name="guestFlushInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlushInput"></a>

```typescript
public readonly guestFlushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storageLocationsInput`<sup>Optional</sup> <a name="storageLocationsInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocationsInput"></a>

```typescript
public readonly storageLocationsInput: string[];
```

- *Type:* string[]

---

##### `chainName`<sup>Required</sup> <a name="chainName" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName"></a>

```typescript
public readonly chainName: string;
```

- *Type:* string

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush"></a>

```typescript
public readonly guestFlush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations"></a>

```typescript
public readonly storageLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">GoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---


### GoogleComputeResourcePolicyTimeoutsOutputReference <a name="GoogleComputeResourcePolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeResourcePolicy } from '@cdktf/provider-google-beta'

new googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeResourcePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeResourcePolicy.GoogleComputeResourcePolicyTimeouts">GoogleComputeResourcePolicyTimeouts</a>

---



