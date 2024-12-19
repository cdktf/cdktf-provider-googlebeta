# `googleKmsAutokeyConfig` Submodule <a name="`googleKmsAutokeyConfig` Submodule" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsAutokeyConfig <a name="GoogleKmsAutokeyConfig" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config google_kms_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

new googleKmsAutokeyConfig.GoogleKmsAutokeyConfig(scope: Construct, id: string, config: GoogleKmsAutokeyConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig">GoogleKmsAutokeyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig">GoogleKmsAutokeyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetKeyProject">resetKeyProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleKmsAutokeyConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyProject` <a name="resetKeyProject" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetKeyProject"></a>

```typescript
public resetKeyProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleKmsAutokeyConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isConstruct"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformElement"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformResource"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleKmsAutokeyConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsAutokeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleKmsAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference">GoogleKmsAutokeyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.folderInput">folderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.keyProjectInput">keyProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.folder">folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.keyProject">keyProject</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsAutokeyConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference">GoogleKmsAutokeyConfigTimeoutsOutputReference</a>

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.folderInput"></a>

```typescript
public readonly folderInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyProjectInput`<sup>Optional</sup> <a name="keyProjectInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.keyProjectInput"></a>

```typescript
public readonly keyProjectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleKmsAutokeyConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyProject`<sup>Required</sup> <a name="keyProject" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.keyProject"></a>

```typescript
public readonly keyProject: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsAutokeyConfigConfig <a name="GoogleKmsAutokeyConfigConfig" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.Initializer"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

const googleKmsAutokeyConfigConfig: googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.folder">folder</a></code> | <code>string</code> | The folder for which to retrieve config. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#id GoogleKmsAutokeyConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.keyProject">keyProject</a></code> | <code>string</code> | The target key project for a given folder where KMS Autokey will provision a CryptoKey for any new KeyHandle the Developer creates. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.folder"></a>

```typescript
public readonly folder: string;
```

- *Type:* string

The folder for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#folder GoogleKmsAutokeyConfig#folder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#id GoogleKmsAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyProject`<sup>Optional</sup> <a name="keyProject" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.keyProject"></a>

```typescript
public readonly keyProject: string;
```

- *Type:* string

The target key project for a given folder where KMS Autokey will provision a CryptoKey for any new KeyHandle the Developer creates.

Should have the form
'projects/<project_id_or_number>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#key_project GoogleKmsAutokeyConfig#key_project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleKmsAutokeyConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#timeouts GoogleKmsAutokeyConfig#timeouts}

---

### GoogleKmsAutokeyConfigTimeouts <a name="GoogleKmsAutokeyConfigTimeouts" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.Initializer"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

const googleKmsAutokeyConfigTimeouts: googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#create GoogleKmsAutokeyConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#delete GoogleKmsAutokeyConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#update GoogleKmsAutokeyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#create GoogleKmsAutokeyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#delete GoogleKmsAutokeyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_kms_autokey_config#update GoogleKmsAutokeyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsAutokeyConfigTimeoutsOutputReference <a name="GoogleKmsAutokeyConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleKmsAutokeyConfig } from '@cdktf/provider-google-beta'

new googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleKmsAutokeyConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleKmsAutokeyConfig.GoogleKmsAutokeyConfigTimeouts">GoogleKmsAutokeyConfigTimeouts</a>

---



