# `googleBackupDrManagementServer` Submodule <a name="`googleBackupDrManagementServer` Submodule" id="@cdktf/provider-google-beta.googleBackupDrManagementServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBackupDrManagementServer <a name="GoogleBackupDrManagementServer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server google_backup_dr_management_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

new googleBackupDrManagementServer.GoogleBackupDrManagementServer(scope: Construct, id: string, config: GoogleBackupDrManagementServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig">GoogleBackupDrManagementServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig">GoogleBackupDrManagementServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putNetworks"></a>

```typescript
public putNetworks(value: IResolvable | GoogleBackupDrManagementServerNetworks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putNetworks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBackupDrManagementServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBackupDrManagementServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBackupDrManagementServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBackupDrManagementServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.managementUri">managementUri</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList">GoogleBackupDrManagementServerManagementUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList">GoogleBackupDrManagementServerNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference">GoogleBackupDrManagementServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networksInput">networksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managementUri`<sup>Required</sup> <a name="managementUri" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.managementUri"></a>

```typescript
public readonly managementUri: GoogleBackupDrManagementServerManagementUriList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList">GoogleBackupDrManagementServerManagementUriList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networks"></a>

```typescript
public readonly networks: GoogleBackupDrManagementServerNetworksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList">GoogleBackupDrManagementServerNetworksList</a>

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBackupDrManagementServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference">GoogleBackupDrManagementServerTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.networksInput"></a>

```typescript
public readonly networksInput: IResolvable | GoogleBackupDrManagementServerNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBackupDrManagementServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBackupDrManagementServerConfig <a name="GoogleBackupDrManagementServerConfig" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

const googleBackupDrManagementServerConfig: googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.location">location</a></code> | <code>string</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.name">name</a></code> | <code>string</code> | The name of management server (management console). |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#id GoogleBackupDrManagementServer#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.networks">networks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]</code> | networks block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#project GoogleBackupDrManagementServer#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.type">type</a></code> | <code>string</code> | The type of management server (management console). Default value: "BACKUP_RESTORE" Possible values: ["BACKUP_RESTORE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#location GoogleBackupDrManagementServer#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#name GoogleBackupDrManagementServer#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#id GoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.networks"></a>

```typescript
public readonly networks: IResolvable | GoogleBackupDrManagementServerNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#networks GoogleBackupDrManagementServer#networks}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#project GoogleBackupDrManagementServer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBackupDrManagementServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#timeouts GoogleBackupDrManagementServer#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of management server (management console). Default value: "BACKUP_RESTORE" Possible values: ["BACKUP_RESTORE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#type GoogleBackupDrManagementServer#type}

---

### GoogleBackupDrManagementServerManagementUri <a name="GoogleBackupDrManagementServerManagementUri" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

const googleBackupDrManagementServerManagementUri: googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri = { ... }
```


### GoogleBackupDrManagementServerNetworks <a name="GoogleBackupDrManagementServerNetworks" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

const googleBackupDrManagementServerNetworks: googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.network">network</a></code> | <code>string</code> | Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.peeringMode">peeringMode</a></code> | <code>string</code> | Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"]. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Network with format 'projects/{{project_id}}/global/networks/{{network_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#network GoogleBackupDrManagementServer#network}

---

##### `peeringMode`<sup>Optional</sup> <a name="peeringMode" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks.property.peeringMode"></a>

```typescript
public readonly peeringMode: string;
```

- *Type:* string

Type of Network peeringMode Default value: "PRIVATE_SERVICE_ACCESS" Possible values: ["PRIVATE_SERVICE_ACCESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#peering_mode GoogleBackupDrManagementServer#peering_mode}

---

### GoogleBackupDrManagementServerTimeouts <a name="GoogleBackupDrManagementServerTimeouts" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

const googleBackupDrManagementServerTimeouts: googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#create GoogleBackupDrManagementServer#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#delete GoogleBackupDrManagementServer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#create GoogleBackupDrManagementServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_backup_dr_management_server#delete GoogleBackupDrManagementServer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBackupDrManagementServerManagementUriList <a name="GoogleBackupDrManagementServerManagementUriList" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

new googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.get"></a>

```typescript
public get(index: number): GoogleBackupDrManagementServerManagementUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBackupDrManagementServerManagementUriOutputReference <a name="GoogleBackupDrManagementServerManagementUriOutputReference" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

new googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.webUi">webUi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri">GoogleBackupDrManagementServerManagementUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `webUi`<sup>Required</sup> <a name="webUi" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.webUi"></a>

```typescript
public readonly webUi: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBackupDrManagementServerManagementUri;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerManagementUri">GoogleBackupDrManagementServerManagementUri</a>

---


### GoogleBackupDrManagementServerNetworksList <a name="GoogleBackupDrManagementServerNetworksList" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

new googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.get"></a>

```typescript
public get(index: number): GoogleBackupDrManagementServerNetworksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrManagementServerNetworks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>[]

---


### GoogleBackupDrManagementServerNetworksOutputReference <a name="GoogleBackupDrManagementServerNetworksOutputReference" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

new googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resetPeeringMode">resetPeeringMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeeringMode` <a name="resetPeeringMode" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.resetPeeringMode"></a>

```typescript
public resetPeeringMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringModeInput">peeringModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode">peeringMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `peeringModeInput`<sup>Optional</sup> <a name="peeringModeInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringModeInput"></a>

```typescript
public readonly peeringModeInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `peeringMode`<sup>Required</sup> <a name="peeringMode" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode"></a>

```typescript
public readonly peeringMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrManagementServerNetworks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerNetworks">GoogleBackupDrManagementServerNetworks</a>

---


### GoogleBackupDrManagementServerTimeoutsOutputReference <a name="GoogleBackupDrManagementServerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBackupDrManagementServer } from '@cdktf/provider-google-beta'

new googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBackupDrManagementServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleBackupDrManagementServer.GoogleBackupDrManagementServerTimeouts">GoogleBackupDrManagementServerTimeouts</a>

---



