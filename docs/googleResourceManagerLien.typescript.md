# `googleResourceManagerLien` Submodule <a name="`googleResourceManagerLien` Submodule" id="@cdktf/provider-google-beta.googleResourceManagerLien"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerLien <a name="GoogleResourceManagerLien" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien google_resource_manager_lien}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

new googleResourceManagerLien.GoogleResourceManagerLien(scope: Construct, id: string, config: GoogleResourceManagerLienConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig">GoogleResourceManagerLienConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig">GoogleResourceManagerLienConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleResourceManagerLienTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleResourceManagerLien resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isConstruct"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

googleResourceManagerLien.GoogleResourceManagerLien.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleResourceManagerLien resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleResourceManagerLien to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleResourceManagerLien that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerLien to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference">GoogleResourceManagerLienTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reasonInput">reasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictionsInput">restrictionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictions">restrictions</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleResourceManagerLienTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference">GoogleResourceManagerLienTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `reasonInput`<sup>Optional</sup> <a name="reasonInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reasonInput"></a>

```typescript
public readonly reasonInput: string;
```

- *Type:* string

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleResourceManagerLienTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.restrictions"></a>

```typescript
public readonly restrictions: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLien.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerLienConfig <a name="GoogleResourceManagerLienConfig" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.Initializer"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

const googleResourceManagerLienConfig: googleResourceManagerLien.GoogleResourceManagerLienConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.origin">origin</a></code> | <code>string</code> | A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.parent">parent</a></code> | <code>string</code> | A reference to the resource this Lien is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.reason">reason</a></code> | <code>string</code> | Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.restrictions">restrictions</a></code> | <code>string[]</code> | The types of operations which should be blocked as a result of this Lien. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#id GoogleResourceManagerLien#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#origin GoogleResourceManagerLien#origin}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

A reference to the resource this Lien is attached to.

The server will validate the parent against those for which Liens are supported.
Since a variety of objects can have Liens against them, you must provide the type
prefix (e.g. "projects/my-project-name").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#parent GoogleResourceManagerLien#parent}

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#reason GoogleResourceManagerLien#reason}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.restrictions"></a>

```typescript
public readonly restrictions: string[];
```

- *Type:* string[]

The types of operations which should be blocked as a result of this Lien.

Each value should correspond to an IAM permission. The server will validate
the permissions against those for which Liens are supported.  An empty
list is meaningless and will be rejected.
e.g. ['resourcemanager.projects.delete']

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#restrictions GoogleResourceManagerLien#restrictions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#id GoogleResourceManagerLien#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleResourceManagerLienTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#timeouts GoogleResourceManagerLien#timeouts}

---

### GoogleResourceManagerLienTimeouts <a name="GoogleResourceManagerLienTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.Initializer"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

const googleResourceManagerLienTimeouts: googleResourceManagerLien.GoogleResourceManagerLienTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#create GoogleResourceManagerLien#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#delete GoogleResourceManagerLien#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#create GoogleResourceManagerLien#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_resource_manager_lien#delete GoogleResourceManagerLien#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerLienTimeoutsOutputReference <a name="GoogleResourceManagerLienTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleResourceManagerLien } from '@cdktf/provider-google-beta'

new googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleResourceManagerLienTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleResourceManagerLien.GoogleResourceManagerLienTimeouts">GoogleResourceManagerLienTimeouts</a>

---



