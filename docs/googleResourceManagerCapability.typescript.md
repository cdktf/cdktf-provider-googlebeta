# `googleResourceManagerCapability` Submodule <a name="`googleResourceManagerCapability` Submodule" id="@cdktf/provider-google-beta.googleResourceManagerCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerCapability <a name="GoogleResourceManagerCapability" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability google_resource_manager_capability}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

new googleResourceManagerCapability.GoogleResourceManagerCapability(scope: Construct, id: string, config: GoogleResourceManagerCapabilityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig">GoogleResourceManagerCapabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig">GoogleResourceManagerCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleResourceManagerCapabilityTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleResourceManagerCapability resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isConstruct"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

googleResourceManagerCapability.GoogleResourceManagerCapability.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformElement"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformResource"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleResourceManagerCapability resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleResourceManagerCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleResourceManagerCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference">GoogleResourceManagerCapabilityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.capabilityNameInput">capabilityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.valueInput">valueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.capabilityName">capabilityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleResourceManagerCapabilityTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference">GoogleResourceManagerCapabilityTimeoutsOutputReference</a>

---

##### `capabilityNameInput`<sup>Optional</sup> <a name="capabilityNameInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.capabilityNameInput"></a>

```typescript
public readonly capabilityNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleResourceManagerCapabilityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.valueInput"></a>

```typescript
public readonly valueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.capabilityName"></a>

```typescript
public readonly capabilityName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapability.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerCapabilityConfig <a name="GoogleResourceManagerCapabilityConfig" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.Initializer"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

const googleResourceManagerCapabilityConfig: googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.capabilityName">capabilityName</a></code> | <code>string</code> | Capability name that should be updated on the folder. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.parent">parent</a></code> | <code>string</code> | Folder on which Capability needs to be updated in the format folders/folder_id. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.value">value</a></code> | <code>boolean \| cdktf.IResolvable</code> | Capability Value. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#id GoogleResourceManagerCapability#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.capabilityName"></a>

```typescript
public readonly capabilityName: string;
```

- *Type:* string

Capability name that should be updated on the folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#capability_name GoogleResourceManagerCapability#capability_name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Folder on which Capability needs to be updated in the format folders/folder_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#parent GoogleResourceManagerCapability#parent}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.value"></a>

```typescript
public readonly value: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Capability Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#value GoogleResourceManagerCapability#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#id GoogleResourceManagerCapability#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleResourceManagerCapabilityTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#timeouts GoogleResourceManagerCapability#timeouts}

---

### GoogleResourceManagerCapabilityTimeouts <a name="GoogleResourceManagerCapabilityTimeouts" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.Initializer"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

const googleResourceManagerCapabilityTimeouts: googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#create GoogleResourceManagerCapability#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#delete GoogleResourceManagerCapability#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#update GoogleResourceManagerCapability#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#create GoogleResourceManagerCapability#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#delete GoogleResourceManagerCapability#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.2/docs/resources/google_resource_manager_capability#update GoogleResourceManagerCapability#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerCapabilityTimeoutsOutputReference <a name="GoogleResourceManagerCapabilityTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleResourceManagerCapability } from '@cdktf/provider-google-beta'

new googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleResourceManagerCapabilityTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleResourceManagerCapability.GoogleResourceManagerCapabilityTimeouts">GoogleResourceManagerCapabilityTimeouts</a>

---



