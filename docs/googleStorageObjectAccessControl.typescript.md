# `googleStorageObjectAccessControl` Submodule <a name="`googleStorageObjectAccessControl` Submodule" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageObjectAccessControl <a name="GoogleStorageObjectAccessControl" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control google_storage_object_access_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

new googleStorageObjectAccessControl.GoogleStorageObjectAccessControl(scope: Construct, id: string, config: GoogleStorageObjectAccessControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig">GoogleStorageObjectAccessControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig">GoogleStorageObjectAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleStorageObjectAccessControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageObjectAccessControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isConstruct"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformElement"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformResource"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleStorageObjectAccessControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageObjectAccessControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageObjectAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageObjectAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.projectTeam">projectTeam</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList">GoogleStorageObjectAccessControlProjectTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference">GoogleStorageObjectAccessControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.entityInput">entityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.entity">entity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `projectTeam`<sup>Required</sup> <a name="projectTeam" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.projectTeam"></a>

```typescript
public readonly projectTeam: GoogleStorageObjectAccessControlProjectTeamList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList">GoogleStorageObjectAccessControlProjectTeamList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageObjectAccessControlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference">GoogleStorageObjectAccessControlTimeoutsOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `entityInput`<sup>Optional</sup> <a name="entityInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.entityInput"></a>

```typescript
public readonly entityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleStorageObjectAccessControlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageObjectAccessControlConfig <a name="GoogleStorageObjectAccessControlConfig" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

const googleStorageObjectAccessControlConfig: googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.entity">entity</a></code> | <code>string</code> | The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.object">object</a></code> | <code>string</code> | The name of the object to apply the access control to. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.role">role</a></code> | <code>string</code> | The access permission for the entity. Possible values: ["OWNER", "READER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#id GoogleStorageObjectAccessControl#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#bucket GoogleStorageObjectAccessControl#bucket}

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.entity"></a>

```typescript
public readonly entity: string;
```

- *Type:* string

The entity holding the permission, in one of the following forms:   * user-{{userId}}   * user-{{email}} (such as "user-liz@example.com")   * group-{{groupId}}   * group-{{email}} (such as "group-example@googlegroups.com")   * domain-{{domain}} (such as "domain-example.com")   * project-team-{{projectId}}   * allUsers   * allAuthenticatedUsers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#entity GoogleStorageObjectAccessControl#entity}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

The name of the object to apply the access control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#object GoogleStorageObjectAccessControl#object}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The access permission for the entity. Possible values: ["OWNER", "READER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#role GoogleStorageObjectAccessControl#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#id GoogleStorageObjectAccessControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleStorageObjectAccessControlTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#timeouts GoogleStorageObjectAccessControl#timeouts}

---

### GoogleStorageObjectAccessControlProjectTeam <a name="GoogleStorageObjectAccessControlProjectTeam" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeam.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

const googleStorageObjectAccessControlProjectTeam: googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeam = { ... }
```


### GoogleStorageObjectAccessControlTimeouts <a name="GoogleStorageObjectAccessControlTimeouts" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

const googleStorageObjectAccessControlTimeouts: googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#create GoogleStorageObjectAccessControl#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#delete GoogleStorageObjectAccessControl#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#update GoogleStorageObjectAccessControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#create GoogleStorageObjectAccessControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#delete GoogleStorageObjectAccessControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_storage_object_access_control#update GoogleStorageObjectAccessControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageObjectAccessControlProjectTeamList <a name="GoogleStorageObjectAccessControlProjectTeamList" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

new googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.get"></a>

```typescript
public get(index: number): GoogleStorageObjectAccessControlProjectTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleStorageObjectAccessControlProjectTeamOutputReference <a name="GoogleStorageObjectAccessControlProjectTeamOutputReference" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

new googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.projectNumber">projectNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.team">team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeam">GoogleStorageObjectAccessControlProjectTeam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.projectNumber"></a>

```typescript
public readonly projectNumber: string;
```

- *Type:* string

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.team"></a>

```typescript
public readonly team: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleStorageObjectAccessControlProjectTeam;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlProjectTeam">GoogleStorageObjectAccessControlProjectTeam</a>

---


### GoogleStorageObjectAccessControlTimeoutsOutputReference <a name="GoogleStorageObjectAccessControlTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleStorageObjectAccessControl } from '@cdktf/provider-google-beta'

new googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleStorageObjectAccessControlTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleStorageObjectAccessControl.GoogleStorageObjectAccessControlTimeouts">GoogleStorageObjectAccessControlTimeouts</a>

---



