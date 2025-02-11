# `googleComposerUserWorkloadsConfigMap` Submodule <a name="`googleComposerUserWorkloadsConfigMap` Submodule" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComposerUserWorkloadsConfigMap <a name="GoogleComposerUserWorkloadsConfigMap" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

new googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap(scope: Construct, id: string, config: GoogleComposerUserWorkloadsConfigMapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig">GoogleComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig">GoogleComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComposerUserWorkloadsConfigMapTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `resetData` <a name="resetData" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetData"></a>

```typescript
public resetData(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isConstruct"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformResource"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComposerUserWorkloadsConfigMap resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComposerUserWorkloadsConfigMap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference">GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.dataInput">dataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference">GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.dataInput"></a>

```typescript
public readonly dataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComposerUserWorkloadsConfigMapTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComposerUserWorkloadsConfigMapConfig <a name="GoogleComposerUserWorkloadsConfigMapConfig" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

const googleComposerUserWorkloadsConfigMapConfig: googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.environment">environment</a></code> | <code>string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.name">name</a></code> | <code>string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#id GoogleComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#project GoogleComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.region">region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#environment GoogleComposerUserWorkloadsConfigMap#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#name GoogleComposerUserWorkloadsConfigMap#name}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The "data" field of Kubernetes ConfigMap, organized in key-value pairs. For details see: https://kubernetes.io/docs/concepts/configuration/configmap/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#data GoogleComposerUserWorkloadsConfigMap#data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#id GoogleComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#project GoogleComposerUserWorkloadsConfigMap#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#region GoogleComposerUserWorkloadsConfigMap#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComposerUserWorkloadsConfigMapTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#timeouts GoogleComposerUserWorkloadsConfigMap#timeouts}

---

### GoogleComposerUserWorkloadsConfigMapTimeouts <a name="GoogleComposerUserWorkloadsConfigMapTimeouts" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

const googleComposerUserWorkloadsConfigMapTimeouts: googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#create GoogleComposerUserWorkloadsConfigMap#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#delete GoogleComposerUserWorkloadsConfigMap#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#update GoogleComposerUserWorkloadsConfigMap#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#create GoogleComposerUserWorkloadsConfigMap#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#delete GoogleComposerUserWorkloadsConfigMap#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_composer_user_workloads_config_map#update GoogleComposerUserWorkloadsConfigMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference <a name="GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComposerUserWorkloadsConfigMap } from '@cdktf/provider-google-beta'

new googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComposerUserWorkloadsConfigMapTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComposerUserWorkloadsConfigMap.GoogleComposerUserWorkloadsConfigMapTimeouts">GoogleComposerUserWorkloadsConfigMapTimeouts</a>

---



