# `googleComputeStoragePool` Submodule <a name="`googleComputeStoragePool` Submodule" id="@cdktf/provider-google-beta.googleComputeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeStoragePool <a name="GoogleComputeStoragePool" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

new googleComputeStoragePool.GoogleComputeStoragePool(scope: Construct, id: string, config: GoogleComputeStoragePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig">GoogleComputeStoragePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig">GoogleComputeStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType">resetCapacityProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType">resetPerformanceProvisioningType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops">resetPoolProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeStoragePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---

##### `resetCapacityProvisioningType` <a name="resetCapacityProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetCapacityProvisioningType"></a>

```typescript
public resetCapacityProvisioningType(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPerformanceProvisioningType` <a name="resetPerformanceProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPerformanceProvisioningType"></a>

```typescript
public resetPerformanceProvisioningType(): void
```

##### `resetPoolProvisionedIops` <a name="resetPoolProvisionedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetPoolProvisionedIops"></a>

```typescript
public resetPoolProvisionedIops(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

googleComputeStoragePool.GoogleComputeStoragePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus">resourceStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput">capacityProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput">performanceProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput">poolProvisionedCapacityGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput">poolProvisionedIopsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput">poolProvisionedThroughputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput">storagePoolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType">storagePoolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `resourceStatus`<sup>Required</sup> <a name="resourceStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.resourceStatus"></a>

```typescript
public readonly resourceStatus: GoogleComputeStoragePoolResourceStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList">GoogleComputeStoragePoolResourceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.status"></a>

```typescript
public readonly status: GoogleComputeStoragePoolStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList">GoogleComputeStoragePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeStoragePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference">GoogleComputeStoragePoolTimeoutsOutputReference</a>

---

##### `capacityProvisioningTypeInput`<sup>Optional</sup> <a name="capacityProvisioningTypeInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningTypeInput"></a>

```typescript
public readonly capacityProvisioningTypeInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `performanceProvisioningTypeInput`<sup>Optional</sup> <a name="performanceProvisioningTypeInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningTypeInput"></a>

```typescript
public readonly performanceProvisioningTypeInput: string;
```

- *Type:* string

---

##### `poolProvisionedCapacityGbInput`<sup>Optional</sup> <a name="poolProvisionedCapacityGbInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGbInput"></a>

```typescript
public readonly poolProvisionedCapacityGbInput: string;
```

- *Type:* string

---

##### `poolProvisionedIopsInput`<sup>Optional</sup> <a name="poolProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIopsInput"></a>

```typescript
public readonly poolProvisionedIopsInput: string;
```

- *Type:* string

---

##### `poolProvisionedThroughputInput`<sup>Optional</sup> <a name="poolProvisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughputInput"></a>

```typescript
public readonly poolProvisionedThroughputInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `storagePoolTypeInput`<sup>Optional</sup> <a name="storagePoolTypeInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolTypeInput"></a>

```typescript
public readonly storagePoolTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeStoragePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `capacityProvisioningType`<sup>Required</sup> <a name="capacityProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.capacityProvisioningType"></a>

```typescript
public readonly capacityProvisioningType: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `performanceProvisioningType`<sup>Required</sup> <a name="performanceProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.performanceProvisioningType"></a>

```typescript
public readonly performanceProvisioningType: string;
```

- *Type:* string

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```typescript
public readonly poolProvisionedCapacityGb: string;
```

- *Type:* string

---

##### `poolProvisionedIops`<sup>Required</sup> <a name="poolProvisionedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedIops"></a>

```typescript
public readonly poolProvisionedIops: string;
```

- *Type:* string

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.poolProvisionedThroughput"></a>

```typescript
public readonly poolProvisionedThroughput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.storagePoolType"></a>

```typescript
public readonly storagePoolType: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeStoragePoolConfig <a name="GoogleComputeStoragePoolConfig" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

const googleComputeStoragePoolConfig: googleComputeStoragePool.GoogleComputeStoragePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb">poolProvisionedCapacityGb</a></code> | <code>string</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput">poolProvisionedThroughput</a></code> | <code>string</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType">storagePoolType</a></code> | <code>string</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType">capacityProvisioningType</a></code> | <code>string</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description">description</a></code> | <code>string</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType">performanceProvisioningType</a></code> | <code>string</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops">poolProvisionedIops</a></code> | <code>string</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone">zone</a></code> | <code>string</code> | A reference to the zone where the storage pool resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#name GoogleComputeStoragePool#name}

---

##### `poolProvisionedCapacityGb`<sup>Required</sup> <a name="poolProvisionedCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedCapacityGb"></a>

```typescript
public readonly poolProvisionedCapacityGb: string;
```

- *Type:* string

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#pool_provisioned_capacity_gb GoogleComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `poolProvisionedThroughput`<sup>Required</sup> <a name="poolProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedThroughput"></a>

```typescript
public readonly poolProvisionedThroughput: string;
```

- *Type:* string

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#pool_provisioned_throughput GoogleComputeStoragePool#pool_provisioned_throughput}

---

##### `storagePoolType`<sup>Required</sup> <a name="storagePoolType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.storagePoolType"></a>

```typescript
public readonly storagePoolType: string;
```

- *Type:* string

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#storage_pool_type GoogleComputeStoragePool#storage_pool_type}

---

##### `capacityProvisioningType`<sup>Optional</sup> <a name="capacityProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.capacityProvisioningType"></a>

```typescript
public readonly capacityProvisioningType: string;
```

- *Type:* string

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#capacity_provisioning_type GoogleComputeStoragePool#capacity_provisioning_type}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#deletion_protection GoogleComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#description GoogleComputeStoragePool#description}

---

##### `performanceProvisioningType`<sup>Optional</sup> <a name="performanceProvisioningType" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.performanceProvisioningType"></a>

```typescript
public readonly performanceProvisioningType: string;
```

- *Type:* string

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#performance_provisioning_type GoogleComputeStoragePool#performance_provisioning_type}

---

##### `poolProvisionedIops`<sup>Optional</sup> <a name="poolProvisionedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.poolProvisionedIops"></a>

```typescript
public readonly poolProvisionedIops: string;
```

- *Type:* string

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#pool_provisioned_iops GoogleComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#project GoogleComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeStoragePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#timeouts GoogleComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#zone GoogleComputeStoragePool#zone}

---

### GoogleComputeStoragePoolResourceStatus <a name="GoogleComputeStoragePoolResourceStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

const googleComputeStoragePoolResourceStatus: googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus = { ... }
```


### GoogleComputeStoragePoolStatus <a name="GoogleComputeStoragePoolStatus" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

const googleComputeStoragePoolStatus: googleComputeStoragePool.GoogleComputeStoragePoolStatus = { ... }
```


### GoogleComputeStoragePoolTimeouts <a name="GoogleComputeStoragePoolTimeouts" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

const googleComputeStoragePoolTimeouts: googleComputeStoragePool.GoogleComputeStoragePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#create GoogleComputeStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#delete GoogleComputeStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_storage_pool#update GoogleComputeStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeStoragePoolResourceStatusList <a name="GoogleComputeStoragePoolResourceStatusList" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

new googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get"></a>

```typescript
public get(index: number): GoogleComputeStoragePoolResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeStoragePoolResourceStatusOutputReference <a name="GoogleComputeStoragePoolResourceStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

new googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount">diskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```typescript
public readonly diskCount: string;
```

- *Type:* string

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```typescript
public readonly lastResizeTimestamp: string;
```

- *Type:* string

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```typescript
public readonly maxTotalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```typescript
public readonly poolUsedCapacityBytes: string;
```

- *Type:* string

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```typescript
public readonly poolUsedIops: string;
```

- *Type:* string

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```typescript
public readonly poolUsedThroughput: string;
```

- *Type:* string

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```typescript
public readonly poolUserWrittenBytes: string;
```

- *Type:* string

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```typescript
public readonly totalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```typescript
public readonly totalProvisionedDiskIops: string;
```

- *Type:* string

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```typescript
public readonly totalProvisionedDiskThroughput: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeStoragePoolResourceStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolResourceStatus">GoogleComputeStoragePoolResourceStatus</a>

---


### GoogleComputeStoragePoolStatusList <a name="GoogleComputeStoragePoolStatusList" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

new googleComputeStoragePool.GoogleComputeStoragePoolStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get"></a>

```typescript
public get(index: number): GoogleComputeStoragePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeStoragePoolStatusOutputReference <a name="GoogleComputeStoragePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

new googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount">diskCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">lastResizeTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">maxTotalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">poolUsedCapacityBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops">poolUsedIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">poolUsedThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">poolUserWrittenBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">totalProvisionedDiskCapacityGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">totalProvisionedDiskIops</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">totalProvisionedDiskThroughput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```typescript
public readonly diskCount: string;
```

- *Type:* string

---

##### `lastResizeTimestamp`<sup>Required</sup> <a name="lastResizeTimestamp" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```typescript
public readonly lastResizeTimestamp: string;
```

- *Type:* string

---

##### `maxTotalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="maxTotalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```typescript
public readonly maxTotalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `poolUsedCapacityBytes`<sup>Required</sup> <a name="poolUsedCapacityBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```typescript
public readonly poolUsedCapacityBytes: string;
```

- *Type:* string

---

##### `poolUsedIops`<sup>Required</sup> <a name="poolUsedIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```typescript
public readonly poolUsedIops: string;
```

- *Type:* string

---

##### `poolUsedThroughput`<sup>Required</sup> <a name="poolUsedThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```typescript
public readonly poolUsedThroughput: string;
```

- *Type:* string

---

##### `poolUserWrittenBytes`<sup>Required</sup> <a name="poolUserWrittenBytes" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```typescript
public readonly poolUserWrittenBytes: string;
```

- *Type:* string

---

##### `totalProvisionedDiskCapacityGb`<sup>Required</sup> <a name="totalProvisionedDiskCapacityGb" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```typescript
public readonly totalProvisionedDiskCapacityGb: string;
```

- *Type:* string

---

##### `totalProvisionedDiskIops`<sup>Required</sup> <a name="totalProvisionedDiskIops" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```typescript
public readonly totalProvisionedDiskIops: string;
```

- *Type:* string

---

##### `totalProvisionedDiskThroughput`<sup>Required</sup> <a name="totalProvisionedDiskThroughput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```typescript
public readonly totalProvisionedDiskThroughput: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeStoragePoolStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolStatus">GoogleComputeStoragePoolStatus</a>

---


### GoogleComputeStoragePoolTimeoutsOutputReference <a name="GoogleComputeStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeStoragePool } from '@cdktf/provider-google-beta'

new googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeStoragePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeStoragePool.GoogleComputeStoragePoolTimeouts">GoogleComputeStoragePoolTimeouts</a>

---



