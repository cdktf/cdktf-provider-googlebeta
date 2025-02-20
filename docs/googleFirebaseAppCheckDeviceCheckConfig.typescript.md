# `googleFirebaseAppCheckDeviceCheckConfig` Submodule <a name="`googleFirebaseAppCheckDeviceCheckConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckDeviceCheckConfig <a name="GoogleFirebaseAppCheckDeviceCheckConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config google_firebase_app_check_device_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

new googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig(scope: Construct, id: string, config: GoogleFirebaseAppCheckDeviceCheckConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig">GoogleFirebaseAppCheckDeviceCheckConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig">GoogleFirebaseAppCheckDeviceCheckConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAppCheckDeviceCheckConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckDeviceCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckDeviceCheckConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppCheckDeviceCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppCheckDeviceCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckDeviceCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeySet">privateKeySet</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateKeySet`<sup>Required</sup> <a name="privateKeySet" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeySet"></a>

```typescript
public readonly privateKeySet: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAppCheckDeviceCheckConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckDeviceCheckConfigConfig <a name="GoogleFirebaseAppCheckDeviceCheckConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.Initializer"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

const googleFirebaseAppCheckDeviceCheckConfigConfig: googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.appId">appId</a></code> | <code>string</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.keyId">keyId</a></code> | <code>string</code> | The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The contents of the private key (.p8) file associated with the key specified by keyId. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#app_id GoogleFirebaseAppCheckDeviceCheckConfig#app_id}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#key_id GoogleFirebaseAppCheckDeviceCheckConfig#key_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The contents of the private key (.p8) file associated with the key specified by keyId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#private_key GoogleFirebaseAppCheckDeviceCheckConfig#private_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppCheckDeviceCheckConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#timeouts GoogleFirebaseAppCheckDeviceCheckConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#token_ttl GoogleFirebaseAppCheckDeviceCheckConfig#token_ttl}

---

### GoogleFirebaseAppCheckDeviceCheckConfigTimeouts <a name="GoogleFirebaseAppCheckDeviceCheckConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

const googleFirebaseAppCheckDeviceCheckConfigTimeouts: googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#create GoogleFirebaseAppCheckDeviceCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#delete GoogleFirebaseAppCheckDeviceCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#update GoogleFirebaseAppCheckDeviceCheckConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#create GoogleFirebaseAppCheckDeviceCheckConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#delete GoogleFirebaseAppCheckDeviceCheckConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_firebase_app_check_device_check_config#update GoogleFirebaseAppCheckDeviceCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppCheckDeviceCheckConfig } from '@cdktf/provider-google-beta'

new googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAppCheckDeviceCheckConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---



