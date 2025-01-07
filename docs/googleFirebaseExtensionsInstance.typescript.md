# `googleFirebaseExtensionsInstance` Submodule <a name="`googleFirebaseExtensionsInstance` Submodule" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseExtensionsInstance <a name="GoogleFirebaseExtensionsInstance" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance google_firebase_extensions_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance(scope: Construct, id: string, config: GoogleFirebaseExtensionsInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig">GoogleFirebaseExtensionsInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig">GoogleFirebaseExtensionsInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig"></a>

```typescript
public putConfig(value: GoogleFirebaseExtensionsInstanceConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseExtensionsInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseExtensionsInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseExtensionsInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseExtensionsInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseExtensionsInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseExtensionsInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference">GoogleFirebaseExtensionsInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.errorStatus">errorStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList">GoogleFirebaseExtensionsInstanceErrorStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationName">lastOperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationType">lastOperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.runtimeData">runtimeData</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList">GoogleFirebaseExtensionsInstanceRuntimeDataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference">GoogleFirebaseExtensionsInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.config"></a>

```typescript
public readonly config: GoogleFirebaseExtensionsInstanceConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference">GoogleFirebaseExtensionsInstanceConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `errorStatus`<sup>Required</sup> <a name="errorStatus" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.errorStatus"></a>

```typescript
public readonly errorStatus: GoogleFirebaseExtensionsInstanceErrorStatusList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList">GoogleFirebaseExtensionsInstanceErrorStatusList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `lastOperationName`<sup>Required</sup> <a name="lastOperationName" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationName"></a>

```typescript
public readonly lastOperationName: string;
```

- *Type:* string

---

##### `lastOperationType`<sup>Required</sup> <a name="lastOperationType" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.lastOperationType"></a>

```typescript
public readonly lastOperationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeData`<sup>Required</sup> <a name="runtimeData" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.runtimeData"></a>

```typescript
public readonly runtimeData: GoogleFirebaseExtensionsInstanceRuntimeDataList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList">GoogleFirebaseExtensionsInstanceRuntimeDataList</a>

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseExtensionsInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference">GoogleFirebaseExtensionsInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.configInput"></a>

```typescript
public readonly configInput: GoogleFirebaseExtensionsInstanceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseExtensionsInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseExtensionsInstanceConfig <a name="GoogleFirebaseExtensionsInstanceConfig" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceConfig: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | The ID to use for the Extension Instance, which will become the final component of the instance's name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.config"></a>

```typescript
public readonly config: GoogleFirebaseExtensionsInstanceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#config GoogleFirebaseExtensionsInstance#config}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The ID to use for the Extension Instance, which will become the final component of the instance's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#instance_id GoogleFirebaseExtensionsInstance#instance_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#id GoogleFirebaseExtensionsInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#project GoogleFirebaseExtensionsInstance#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseExtensionsInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#timeouts GoogleFirebaseExtensionsInstance#timeouts}

---

### GoogleFirebaseExtensionsInstanceConfigA <a name="GoogleFirebaseExtensionsInstanceConfigA" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceConfigA: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionRef">extensionRef</a></code> | <code>string</code> | The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | Environment variables that may be configured for the Extension. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.allowedEventTypes">allowedEventTypes</a></code> | <code>string[]</code> | List of extension events selected by consumer that extension is allowed to emit, identified by their types. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.eventarcChannel">eventarcChannel</a></code> | <code>string</code> | Fully qualified Eventarc resource name that consumers should use for event triggers. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionVersion">extensionVersion</a></code> | <code>string</code> | The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.systemParams">systemParams</a></code> | <code>{[ key: string ]: string}</code> | Params whose values are only available at deployment time. |

---

##### `extensionRef`<sup>Required</sup> <a name="extensionRef" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionRef"></a>

```typescript
public readonly extensionRef: string;
```

- *Type:* string

The ref of the Extension from the Registry (e.g. publisher-id/awesome-extension).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#extension_ref GoogleFirebaseExtensionsInstance#extension_ref}

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables that may be configured for the Extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#params GoogleFirebaseExtensionsInstance#params}

---

##### `allowedEventTypes`<sup>Optional</sup> <a name="allowedEventTypes" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.allowedEventTypes"></a>

```typescript
public readonly allowedEventTypes: string[];
```

- *Type:* string[]

List of extension events selected by consumer that extension is allowed to emit, identified by their types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#allowed_event_types GoogleFirebaseExtensionsInstance#allowed_event_types}

---

##### `eventarcChannel`<sup>Optional</sup> <a name="eventarcChannel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.eventarcChannel"></a>

```typescript
public readonly eventarcChannel: string;
```

- *Type:* string

Fully qualified Eventarc resource name that consumers should use for event triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#eventarc_channel GoogleFirebaseExtensionsInstance#eventarc_channel}

---

##### `extensionVersion`<sup>Optional</sup> <a name="extensionVersion" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.extensionVersion"></a>

```typescript
public readonly extensionVersion: string;
```

- *Type:* string

The version of the Extension from the Registry (e.g. 1.0.3). If left blank, latest is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#extension_version GoogleFirebaseExtensionsInstance#extension_version}

---

##### `systemParams`<sup>Optional</sup> <a name="systemParams" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA.property.systemParams"></a>

```typescript
public readonly systemParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Params whose values are only available at deployment time.

Unlike other params, these will not be set as environment variables on
functions. See a full list of system parameters at
https://firebase.google.com/docs/extensions/publishers/parameters#system_parameters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#system_params GoogleFirebaseExtensionsInstance#system_params}

---

### GoogleFirebaseExtensionsInstanceErrorStatus <a name="GoogleFirebaseExtensionsInstanceErrorStatus" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceErrorStatus: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus = { ... }
```


### GoogleFirebaseExtensionsInstanceRuntimeData <a name="GoogleFirebaseExtensionsInstanceRuntimeData" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceRuntimeData: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData = { ... }
```


### GoogleFirebaseExtensionsInstanceRuntimeDataFatalError <a name="GoogleFirebaseExtensionsInstanceRuntimeDataFatalError" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceRuntimeDataFatalError: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError = { ... }
```


### GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState <a name="GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceRuntimeDataProcessingState: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState = { ... }
```


### GoogleFirebaseExtensionsInstanceTimeouts <a name="GoogleFirebaseExtensionsInstanceTimeouts" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

const googleFirebaseExtensionsInstanceTimeouts: googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#create GoogleFirebaseExtensionsInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#delete GoogleFirebaseExtensionsInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#update GoogleFirebaseExtensionsInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#create GoogleFirebaseExtensionsInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#delete GoogleFirebaseExtensionsInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_extensions_instance#update GoogleFirebaseExtensionsInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseExtensionsInstanceConfigAOutputReference <a name="GoogleFirebaseExtensionsInstanceConfigAOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetAllowedEventTypes">resetAllowedEventTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetEventarcChannel">resetEventarcChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetExtensionVersion">resetExtensionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetSystemParams">resetSystemParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedEventTypes` <a name="resetAllowedEventTypes" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetAllowedEventTypes"></a>

```typescript
public resetAllowedEventTypes(): void
```

##### `resetEventarcChannel` <a name="resetEventarcChannel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetEventarcChannel"></a>

```typescript
public resetEventarcChannel(): void
```

##### `resetExtensionVersion` <a name="resetExtensionVersion" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetExtensionVersion"></a>

```typescript
public resetExtensionVersion(): void
```

##### `resetSystemParams` <a name="resetSystemParams" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.resetSystemParams"></a>

```typescript
public resetSystemParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.populatedPostinstallContent">populatedPostinstallContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypesInput">allowedEventTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannelInput">eventarcChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRefInput">extensionRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersionInput">extensionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParamsInput">systemParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypes">allowedEventTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannel">eventarcChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRef">extensionRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersion">extensionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParams">systemParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `populatedPostinstallContent`<sup>Required</sup> <a name="populatedPostinstallContent" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.populatedPostinstallContent"></a>

```typescript
public readonly populatedPostinstallContent: string;
```

- *Type:* string

---

##### `allowedEventTypesInput`<sup>Optional</sup> <a name="allowedEventTypesInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypesInput"></a>

```typescript
public readonly allowedEventTypesInput: string[];
```

- *Type:* string[]

---

##### `eventarcChannelInput`<sup>Optional</sup> <a name="eventarcChannelInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannelInput"></a>

```typescript
public readonly eventarcChannelInput: string;
```

- *Type:* string

---

##### `extensionRefInput`<sup>Optional</sup> <a name="extensionRefInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRefInput"></a>

```typescript
public readonly extensionRefInput: string;
```

- *Type:* string

---

##### `extensionVersionInput`<sup>Optional</sup> <a name="extensionVersionInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersionInput"></a>

```typescript
public readonly extensionVersionInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `systemParamsInput`<sup>Optional</sup> <a name="systemParamsInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParamsInput"></a>

```typescript
public readonly systemParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `allowedEventTypes`<sup>Required</sup> <a name="allowedEventTypes" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.allowedEventTypes"></a>

```typescript
public readonly allowedEventTypes: string[];
```

- *Type:* string[]

---

##### `eventarcChannel`<sup>Required</sup> <a name="eventarcChannel" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.eventarcChannel"></a>

```typescript
public readonly eventarcChannel: string;
```

- *Type:* string

---

##### `extensionRef`<sup>Required</sup> <a name="extensionRef" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionRef"></a>

```typescript
public readonly extensionRef: string;
```

- *Type:* string

---

##### `extensionVersion`<sup>Required</sup> <a name="extensionVersion" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.extensionVersion"></a>

```typescript
public readonly extensionVersion: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `systemParams`<sup>Required</sup> <a name="systemParams" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.systemParams"></a>

```typescript
public readonly systemParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseExtensionsInstanceConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceConfigA">GoogleFirebaseExtensionsInstanceConfigA</a>

---


### GoogleFirebaseExtensionsInstanceErrorStatusList <a name="GoogleFirebaseExtensionsInstanceErrorStatusList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.get"></a>

```typescript
public get(index: number): GoogleFirebaseExtensionsInstanceErrorStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseExtensionsInstanceErrorStatusOutputReference <a name="GoogleFirebaseExtensionsInstanceErrorStatusOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus">GoogleFirebaseExtensionsInstanceErrorStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseExtensionsInstanceErrorStatus;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceErrorStatus">GoogleFirebaseExtensionsInstanceErrorStatus</a>

---


### GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList <a name="GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.get"></a>

```typescript
public get(index: number): GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference <a name="GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError">GoogleFirebaseExtensionsInstanceRuntimeDataFatalError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseExtensionsInstanceRuntimeDataFatalError;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalError">GoogleFirebaseExtensionsInstanceRuntimeDataFatalError</a>

---


### GoogleFirebaseExtensionsInstanceRuntimeDataList <a name="GoogleFirebaseExtensionsInstanceRuntimeDataList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.get"></a>

```typescript
public get(index: number): GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference <a name="GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fatalError">fatalError</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList">GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.processingState">processingState</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.stateUpdateTime">stateUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData">GoogleFirebaseExtensionsInstanceRuntimeData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fatalError`<sup>Required</sup> <a name="fatalError" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.fatalError"></a>

```typescript
public readonly fatalError: GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList">GoogleFirebaseExtensionsInstanceRuntimeDataFatalErrorList</a>

---

##### `processingState`<sup>Required</sup> <a name="processingState" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.processingState"></a>

```typescript
public readonly processingState: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList</a>

---

##### `stateUpdateTime`<sup>Required</sup> <a name="stateUpdateTime" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.stateUpdateTime"></a>

```typescript
public readonly stateUpdateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseExtensionsInstanceRuntimeData;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeData">GoogleFirebaseExtensionsInstanceRuntimeData</a>

---


### GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList <a name="GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.get"></a>

```typescript
public get(index: number): GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference <a name="GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.detailMessage">detailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailMessage`<sup>Required</sup> <a name="detailMessage" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.detailMessage"></a>

```typescript
public readonly detailMessage: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState">GoogleFirebaseExtensionsInstanceRuntimeDataProcessingState</a>

---


### GoogleFirebaseExtensionsInstanceTimeoutsOutputReference <a name="GoogleFirebaseExtensionsInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseExtensionsInstance } from '@cdktf/provider-google-beta'

new googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseExtensionsInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseExtensionsInstance.GoogleFirebaseExtensionsInstanceTimeouts">GoogleFirebaseExtensionsInstanceTimeouts</a>

---



