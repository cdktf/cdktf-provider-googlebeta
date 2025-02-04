# `googleNetappStoragePool` Submodule <a name="`googleNetappStoragePool` Submodule" id="@cdktf/provider-google-beta.googleNetappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappStoragePool <a name="GoogleNetappStoragePool" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

new googleNetappStoragePool.GoogleNetappStoragePool(scope: Construct, id: string, config: GoogleNetappStoragePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig">GoogleNetappStoragePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig">GoogleNetappStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetActiveDirectory">resetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetAllowAutoTiering">resetAllowAutoTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetKmsConfig">resetKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLdapEnabled">resetLdapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetReplicaZone">resetReplicaZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetappStoragePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a>

---

##### `resetActiveDirectory` <a name="resetActiveDirectory" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetActiveDirectory"></a>

```typescript
public resetActiveDirectory(): void
```

##### `resetAllowAutoTiering` <a name="resetAllowAutoTiering" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetAllowAutoTiering"></a>

```typescript
public resetAllowAutoTiering(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsConfig` <a name="resetKmsConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetKmsConfig"></a>

```typescript
public resetKmsConfig(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLdapEnabled` <a name="resetLdapEnabled" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetLdapEnabled"></a>

```typescript
public resetLdapEnabled(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReplicaZone` <a name="resetReplicaZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetReplicaZone"></a>

```typescript
public resetReplicaZone(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isConstruct"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

googleNetappStoragePool.GoogleNetappStoragePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleNetappStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference">GoogleNetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCapacityGib">volumeCapacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCount">volumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectoryInput">activeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTieringInput">allowAutoTieringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGibInput">capacityGibInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfigInput">kmsConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabledInput">ldapEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZoneInput">replicaZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevelInput">serviceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectory">activeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTiering">allowAutoTiering</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGib">capacityGib</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfig">kmsConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabled">ldapEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZone">replicaZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappStoragePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference">GoogleNetappStoragePoolTimeoutsOutputReference</a>

---

##### `volumeCapacityGib`<sup>Required</sup> <a name="volumeCapacityGib" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCapacityGib"></a>

```typescript
public readonly volumeCapacityGib: string;
```

- *Type:* string

---

##### `volumeCount`<sup>Required</sup> <a name="volumeCount" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.volumeCount"></a>

```typescript
public readonly volumeCount: number;
```

- *Type:* number

---

##### `activeDirectoryInput`<sup>Optional</sup> <a name="activeDirectoryInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectoryInput"></a>

```typescript
public readonly activeDirectoryInput: string;
```

- *Type:* string

---

##### `allowAutoTieringInput`<sup>Optional</sup> <a name="allowAutoTieringInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTieringInput"></a>

```typescript
public readonly allowAutoTieringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capacityGibInput`<sup>Optional</sup> <a name="capacityGibInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGibInput"></a>

```typescript
public readonly capacityGibInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsConfigInput`<sup>Optional</sup> <a name="kmsConfigInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfigInput"></a>

```typescript
public readonly kmsConfigInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ldapEnabledInput`<sup>Optional</sup> <a name="ldapEnabledInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabledInput"></a>

```typescript
public readonly ldapEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `replicaZoneInput`<sup>Optional</sup> <a name="replicaZoneInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZoneInput"></a>

```typescript
public readonly replicaZoneInput: string;
```

- *Type:* string

---

##### `serviceLevelInput`<sup>Optional</sup> <a name="serviceLevelInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevelInput"></a>

```typescript
public readonly serviceLevelInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetappStoragePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `activeDirectory`<sup>Required</sup> <a name="activeDirectory" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: string;
```

- *Type:* string

---

##### `allowAutoTiering`<sup>Required</sup> <a name="allowAutoTiering" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.allowAutoTiering"></a>

```typescript
public readonly allowAutoTiering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsConfig`<sup>Required</sup> <a name="kmsConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.kmsConfig"></a>

```typescript
public readonly kmsConfig: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ldapEnabled`<sup>Required</sup> <a name="ldapEnabled" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.ldapEnabled"></a>

```typescript
public readonly ldapEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `replicaZone`<sup>Required</sup> <a name="replicaZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.replicaZone"></a>

```typescript
public readonly replicaZone: string;
```

- *Type:* string

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappStoragePoolConfig <a name="GoogleNetappStoragePoolConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.Initializer"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

const googleNetappStoragePoolConfig: googleNetappStoragePool.GoogleNetappStoragePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.capacityGib">capacityGib</a></code> | <code>string</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.location">location</a></code> | <code>string</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.name">name</a></code> | <code>string</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.network">network</a></code> | <code>string</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.serviceLevel">serviceLevel</a></code> | <code>string</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.activeDirectory">activeDirectory</a></code> | <code>string</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.allowAutoTiering">allowAutoTiering</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#id GoogleNetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.kmsConfig">kmsConfig</a></code> | <code>string</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.ldapEnabled">ldapEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#project GoogleNetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.replicaZone">replicaZone</a></code> | <code>string</code> | Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones). |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.zone">zone</a></code> | <code>string</code> | Specifies the active zone for regional Flex pools. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacityGib`<sup>Required</sup> <a name="capacityGib" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.capacityGib"></a>

```typescript
public readonly capacityGib: string;
```

- *Type:* string

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#capacity_gib GoogleNetappStoragePool#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#location GoogleNetappStoragePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#name GoogleNetappStoragePool#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#network GoogleNetappStoragePool#network}

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.serviceLevel"></a>

```typescript
public readonly serviceLevel: string;
```

- *Type:* string

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#service_level GoogleNetappStoragePool#service_level}

---

##### `activeDirectory`<sup>Optional</sup> <a name="activeDirectory" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.activeDirectory"></a>

```typescript
public readonly activeDirectory: string;
```

- *Type:* string

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#active_directory GoogleNetappStoragePool#active_directory}

---

##### `allowAutoTiering`<sup>Optional</sup> <a name="allowAutoTiering" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.allowAutoTiering"></a>

```typescript
public readonly allowAutoTiering: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#allow_auto_tiering GoogleNetappStoragePool#allow_auto_tiering}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#description GoogleNetappStoragePool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#id GoogleNetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsConfig`<sup>Optional</sup> <a name="kmsConfig" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.kmsConfig"></a>

```typescript
public readonly kmsConfig: string;
```

- *Type:* string

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#kms_config GoogleNetappStoragePool#kms_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#labels GoogleNetappStoragePool#labels}

---

##### `ldapEnabled`<sup>Optional</sup> <a name="ldapEnabled" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.ldapEnabled"></a>

```typescript
public readonly ldapEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#ldap_enabled GoogleNetappStoragePool#ldap_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#project GoogleNetappStoragePool#project}.

---

##### `replicaZone`<sup>Optional</sup> <a name="replicaZone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.replicaZone"></a>

```typescript
public readonly replicaZone: string;
```

- *Type:* string

Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#replica_zone GoogleNetappStoragePool#replica_zone}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetappStoragePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#timeouts GoogleNetappStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Specifies the active zone for regional Flex pools.

'zone' and 'replica_zone' values can be swapped to initiate a
[zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
If you want to create a zonal Flex pool, specify a zone name for 'location' and omit 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#zone GoogleNetappStoragePool#zone}

---

### GoogleNetappStoragePoolTimeouts <a name="GoogleNetappStoragePoolTimeouts" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.Initializer"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

const googleNetappStoragePoolTimeouts: googleNetappStoragePool.GoogleNetappStoragePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#create GoogleNetappStoragePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#delete GoogleNetappStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#update GoogleNetappStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#create GoogleNetappStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#delete GoogleNetappStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_netapp_storage_pool#update GoogleNetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappStoragePoolTimeoutsOutputReference <a name="GoogleNetappStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetappStoragePool } from '@cdktf/provider-google-beta'

new googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetappStoragePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleNetappStoragePool.GoogleNetappStoragePoolTimeouts">GoogleNetappStoragePoolTimeouts</a>

---



