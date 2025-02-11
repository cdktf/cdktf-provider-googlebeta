# `googleParameterManagerParameterVersion` Submodule <a name="`googleParameterManagerParameterVersion` Submodule" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleParameterManagerParameterVersion <a name="GoogleParameterManagerParameterVersion" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version google_parameter_manager_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

new googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion(scope: Construct, id: string, config: GoogleParameterManagerParameterVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig">GoogleParameterManagerParameterVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig">GoogleParameterManagerParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleParameterManagerParameterVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleParameterManagerParameterVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleParameterManagerParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleParameterManagerParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference">GoogleParameterManagerParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterDataInput">parameterDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionIdInput">parameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterData">parameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParameterManagerParameterVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference">GoogleParameterManagerParameterVersionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterDataInput`<sup>Optional</sup> <a name="parameterDataInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterDataInput"></a>

```typescript
public readonly parameterDataInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `parameterVersionIdInput`<sup>Optional</sup> <a name="parameterVersionIdInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionIdInput"></a>

```typescript
public readonly parameterVersionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleParameterManagerParameterVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleParameterManagerParameterVersionConfig <a name="GoogleParameterManagerParameterVersionConfig" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.Initializer"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

const googleParameterManagerParameterVersionConfig: googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameter">parameter</a></code> | <code>string</code> | Parameter Manager Parameter resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterData">parameterData</a></code> | <code>string</code> | The Parameter data. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterVersionId">parameterVersionId</a></code> | <code>string</code> | Version ID of the Parameter Version Resource. This must be unique within the Parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The current state of Parameter Version. This field is only applicable for updating Parameter Version. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#id GoogleParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Parameter Manager Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#parameter GoogleParameterManagerParameterVersion#parameter}

---

##### `parameterData`<sup>Required</sup> <a name="parameterData" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterData"></a>

```typescript
public readonly parameterData: string;
```

- *Type:* string

The Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#parameter_data GoogleParameterManagerParameterVersion#parameter_data}

---

##### `parameterVersionId`<sup>Required</sup> <a name="parameterVersionId" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.parameterVersionId"></a>

```typescript
public readonly parameterVersionId: string;
```

- *Type:* string

Version ID of the Parameter Version Resource. This must be unique within the Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#parameter_version_id GoogleParameterManagerParameterVersion#parameter_version_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The current state of Parameter Version. This field is only applicable for updating Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#disabled GoogleParameterManagerParameterVersion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#id GoogleParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleParameterManagerParameterVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#timeouts GoogleParameterManagerParameterVersion#timeouts}

---

### GoogleParameterManagerParameterVersionTimeouts <a name="GoogleParameterManagerParameterVersionTimeouts" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.Initializer"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

const googleParameterManagerParameterVersionTimeouts: googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#create GoogleParameterManagerParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#delete GoogleParameterManagerParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#update GoogleParameterManagerParameterVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#create GoogleParameterManagerParameterVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#delete GoogleParameterManagerParameterVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_parameter_manager_parameter_version#update GoogleParameterManagerParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleParameterManagerParameterVersionTimeoutsOutputReference <a name="GoogleParameterManagerParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleParameterManagerParameterVersion } from '@cdktf/provider-google-beta'

new googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleParameterManagerParameterVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleParameterManagerParameterVersion.GoogleParameterManagerParameterVersionTimeouts">GoogleParameterManagerParameterVersionTimeouts</a>

---



