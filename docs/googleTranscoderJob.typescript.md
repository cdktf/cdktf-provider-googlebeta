# `googleTranscoderJob` Submodule <a name="`googleTranscoderJob` Submodule" id="@cdktf/provider-google-beta.googleTranscoderJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleTranscoderJob <a name="GoogleTranscoderJob" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job google_transcoder_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJob(scope: Construct, id: string, config: GoogleTranscoderJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig">GoogleTranscoderJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig">GoogleTranscoderJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTemplateId">resetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig"></a>

```typescript
public putConfig(value: GoogleTranscoderJobConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleTranscoderJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTemplateId"></a>

```typescript
public resetTemplateId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleTranscoderJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isConstruct"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

googleTranscoderJob.GoogleTranscoderJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformElement"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

googleTranscoderJob.GoogleTranscoderJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformResource"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

googleTranscoderJob.GoogleTranscoderJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleTranscoderJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleTranscoderJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleTranscoderJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleTranscoderJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference">GoogleTranscoderJobConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference">GoogleTranscoderJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.config"></a>

```typescript
public readonly config: GoogleTranscoderJobConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference">GoogleTranscoderJobConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleTranscoderJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference">GoogleTranscoderJobTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.configInput"></a>

```typescript
public readonly configInput: GoogleTranscoderJobConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleTranscoderJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleTranscoderJobConfig <a name="GoogleTranscoderJobConfig" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfig: googleTranscoderJob.GoogleTranscoderJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.location">location</a></code> | <code>string</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#project GoogleTranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.templateId">templateId</a></code> | <code>string</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#location GoogleTranscoderJob#location}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.config"></a>

```typescript
public readonly config: GoogleTranscoderJobConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#config GoogleTranscoderJob#config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#labels GoogleTranscoderJob#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#project GoogleTranscoderJob#project}.

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#template_id GoogleTranscoderJob#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleTranscoderJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#timeouts GoogleTranscoderJob#timeouts}

---

### GoogleTranscoderJobConfigA <a name="GoogleTranscoderJobConfigA" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigA: googleTranscoderJob.GoogleTranscoderJobConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.adBreaks">adBreaks</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.editList">editList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.elementaryStreams">elementaryStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.encryptions">encryptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.inputs">inputs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]</code> | inputs block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.manifests">manifests</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]</code> | manifests block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.muxStreams">muxStreams</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.output">output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.overlays">overlays</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]</code> | overlays block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `adBreaks`<sup>Optional</sup> <a name="adBreaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.adBreaks"></a>

```typescript
public readonly adBreaks: IResolvable | GoogleTranscoderJobConfigAdBreaks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#ad_breaks GoogleTranscoderJob#ad_breaks}

---

##### `editList`<sup>Optional</sup> <a name="editList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.editList"></a>

```typescript
public readonly editList: IResolvable | GoogleTranscoderJobConfigEditListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#edit_list GoogleTranscoderJob#edit_list}

---

##### `elementaryStreams`<sup>Optional</sup> <a name="elementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.elementaryStreams"></a>

```typescript
public readonly elementaryStreams: IResolvable | GoogleTranscoderJobConfigElementaryStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#elementary_streams GoogleTranscoderJob#elementary_streams}

---

##### `encryptions`<sup>Optional</sup> <a name="encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.encryptions"></a>

```typescript
public readonly encryptions: IResolvable | GoogleTranscoderJobConfigEncryptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#encryptions GoogleTranscoderJob#encryptions}

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.inputs"></a>

```typescript
public readonly inputs: IResolvable | GoogleTranscoderJobConfigInputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#inputs GoogleTranscoderJob#inputs}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.manifests"></a>

```typescript
public readonly manifests: IResolvable | GoogleTranscoderJobConfigManifests[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#manifests GoogleTranscoderJob#manifests}

---

##### `muxStreams`<sup>Optional</sup> <a name="muxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.muxStreams"></a>

```typescript
public readonly muxStreams: IResolvable | GoogleTranscoderJobConfigMuxStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#mux_streams GoogleTranscoderJob#mux_streams}

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.output"></a>

```typescript
public readonly output: GoogleTranscoderJobConfigOutput;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#output GoogleTranscoderJob#output}

---

##### `overlays`<sup>Optional</sup> <a name="overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.overlays"></a>

```typescript
public readonly overlays: IResolvable | GoogleTranscoderJobConfigOverlays[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#overlays GoogleTranscoderJob#overlays}

---

##### `pubsubDestination`<sup>Optional</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: GoogleTranscoderJobConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#pubsub_destination GoogleTranscoderJob#pubsub_destination}

---

### GoogleTranscoderJobConfigAdBreaks <a name="GoogleTranscoderJobConfigAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigAdBreaks: googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

### GoogleTranscoderJobConfigEditListStruct <a name="GoogleTranscoderJobConfigEditListStruct" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEditListStruct: googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.inputs">inputs</a></code> | <code>string[]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.key">key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | Start time in seconds for the atom, relative to the input file timeline. The default is '0s'. |

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#inputs GoogleTranscoderJob#inputs}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

Start time in seconds for the atom, relative to the input file timeline. The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

### GoogleTranscoderJobConfigElementaryStreams <a name="GoogleTranscoderJobConfigElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigElementaryStreams: googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.audioStream">audioStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.key">key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.videoStream">videoStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `audioStream`<sup>Optional</sup> <a name="audioStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.audioStream"></a>

```typescript
public readonly audioStream: GoogleTranscoderJobConfigElementaryStreamsAudioStream;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#audio_stream GoogleTranscoderJob#audio_stream}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `videoStream`<sup>Optional</sup> <a name="videoStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams.property.videoStream"></a>

```typescript
public readonly videoStream: GoogleTranscoderJobConfigElementaryStreamsVideoStream;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#video_stream GoogleTranscoderJob#video_stream}

---

### GoogleTranscoderJobConfigElementaryStreamsAudioStream <a name="GoogleTranscoderJobConfigElementaryStreamsAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigElementaryStreamsAudioStream: googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps">bitrateBps</a></code> | <code>number</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelCount">channelCount</a></code> | <code>number</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout">channelLayout</a></code> | <code>string[]</code> | A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.codec">codec</a></code> | <code>string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz">sampleRateHertz</a></code> | <code>number</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```typescript
public readonly bitrateBps: number;
```

- *Type:* number

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#bitrate_bps GoogleTranscoderJob#bitrate_bps}

---

##### `channelCount`<sup>Optional</sup> <a name="channelCount" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelCount"></a>

```typescript
public readonly channelCount: number;
```

- *Type:* number

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#channel_count GoogleTranscoderJob#channel_count}

---

##### `channelLayout`<sup>Optional</sup> <a name="channelLayout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```typescript
public readonly channelLayout: string[];
```

- *Type:* string[]

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#channel_layout GoogleTranscoderJob#channel_layout}

---

##### `codec`<sup>Optional</sup> <a name="codec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.codec"></a>

```typescript
public readonly codec: string;
```

- *Type:* string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#codec GoogleTranscoderJob#codec}

---

##### `sampleRateHertz`<sup>Optional</sup> <a name="sampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```typescript
public readonly sampleRateHertz: number;
```

- *Type:* number

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#sample_rate_hertz GoogleTranscoderJob#sample_rate_hertz}

---

### GoogleTranscoderJobConfigElementaryStreamsVideoStream <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigElementaryStreamsVideoStream: googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `h264`<sup>Optional</sup> <a name="h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream.property.h264"></a>

```typescript
public readonly h264: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#h264 GoogleTranscoderJob#h264}

---

### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264 <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigElementaryStreamsVideoStreamH264: googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps">bitrateBps</a></code> | <code>number</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate">frameRate</a></code> | <code>number</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel">crfLevel</a></code> | <code>number</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder">entropyCoder</a></code> | <code>string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration">gopDuration</a></code> | <code>string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels">heightPixels</a></code> | <code>number</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat">pixelFormat</a></code> | <code>string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset">preset</a></code> | <code>string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile">profile</a></code> | <code>string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode">rateControlMode</a></code> | <code>string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">vbvFullnessBits</a></code> | <code>number</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">vbvSizeBits</a></code> | <code>number</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels">widthPixels</a></code> | <code>number</code> | The width of the video in pixels. |

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```typescript
public readonly bitrateBps: number;
```

- *Type:* number

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#bitrate_bps GoogleTranscoderJob#bitrate_bps}

---

##### `frameRate`<sup>Required</sup> <a name="frameRate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```typescript
public readonly frameRate: number;
```

- *Type:* number

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#frame_rate GoogleTranscoderJob#frame_rate}

---

##### `crfLevel`<sup>Optional</sup> <a name="crfLevel" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```typescript
public readonly crfLevel: number;
```

- *Type:* number

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#crf_level GoogleTranscoderJob#crf_level}

---

##### `entropyCoder`<sup>Optional</sup> <a name="entropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```typescript
public readonly entropyCoder: string;
```

- *Type:* string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#entropy_coder GoogleTranscoderJob#entropy_coder}

---

##### `gopDuration`<sup>Optional</sup> <a name="gopDuration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```typescript
public readonly gopDuration: string;
```

- *Type:* string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#gop_duration GoogleTranscoderJob#gop_duration}

---

##### `heightPixels`<sup>Optional</sup> <a name="heightPixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```typescript
public readonly heightPixels: number;
```

- *Type:* number

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#height_pixels GoogleTranscoderJob#height_pixels}

---

##### `hlg`<sup>Optional</sup> <a name="hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```typescript
public readonly hlg: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#hlg GoogleTranscoderJob#hlg}

---

##### `pixelFormat`<sup>Optional</sup> <a name="pixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```typescript
public readonly pixelFormat: string;
```

- *Type:* string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#pixel_format GoogleTranscoderJob#pixel_format}

---

##### `preset`<sup>Optional</sup> <a name="preset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```typescript
public readonly preset: string;
```

- *Type:* string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#preset GoogleTranscoderJob#preset}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#profile GoogleTranscoderJob#profile}

---

##### `rateControlMode`<sup>Optional</sup> <a name="rateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```typescript
public readonly rateControlMode: string;
```

- *Type:* string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#rate_control_mode GoogleTranscoderJob#rate_control_mode}

---

##### `sdr`<sup>Optional</sup> <a name="sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```typescript
public readonly sdr: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#sdr GoogleTranscoderJob#sdr}

---

##### `vbvFullnessBits`<sup>Optional</sup> <a name="vbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```typescript
public readonly vbvFullnessBits: number;
```

- *Type:* number

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#vbv_fullness_bits GoogleTranscoderJob#vbv_fullness_bits}

---

##### `vbvSizeBits`<sup>Optional</sup> <a name="vbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```typescript
public readonly vbvSizeBits: number;
```

- *Type:* number

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#vbv_size_bits GoogleTranscoderJob#vbv_size_bits}

---

##### `widthPixels`<sup>Optional</sup> <a name="widthPixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```typescript
public readonly widthPixels: number;
```

- *Type:* number

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#width_pixels GoogleTranscoderJob#width_pixels}

---

### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg: googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg = { ... }
```


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr: googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr = { ... }
```


### GoogleTranscoderJobConfigEncryptions <a name="GoogleTranscoderJobConfigEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptions: googleTranscoderJob.GoogleTranscoderJobConfigEncryptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.id">id</a></code> | <code>string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.drmSystems">drmSystems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.mpegCenc">mpegCenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.sampleAes">sampleAes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.secretManagerKeySource">secretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#id GoogleTranscoderJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `aes128`<sup>Optional</sup> <a name="aes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.aes128"></a>

```typescript
public readonly aes128: GoogleTranscoderJobConfigEncryptionsAes128;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#aes128 GoogleTranscoderJob#aes128}

---

##### `drmSystems`<sup>Optional</sup> <a name="drmSystems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.drmSystems"></a>

```typescript
public readonly drmSystems: GoogleTranscoderJobConfigEncryptionsDrmSystems;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#drm_systems GoogleTranscoderJob#drm_systems}

---

##### `mpegCenc`<sup>Optional</sup> <a name="mpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.mpegCenc"></a>

```typescript
public readonly mpegCenc: GoogleTranscoderJobConfigEncryptionsMpegCenc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#mpeg_cenc GoogleTranscoderJob#mpeg_cenc}

---

##### `sampleAes`<sup>Optional</sup> <a name="sampleAes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.sampleAes"></a>

```typescript
public readonly sampleAes: GoogleTranscoderJobConfigEncryptionsSampleAes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#sample_aes GoogleTranscoderJob#sample_aes}

---

##### `secretManagerKeySource`<sup>Optional</sup> <a name="secretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions.property.secretManagerKeySource"></a>

```typescript
public readonly secretManagerKeySource: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#secret_manager_key_source GoogleTranscoderJob#secret_manager_key_source}

---

### GoogleTranscoderJobConfigEncryptionsAes128 <a name="GoogleTranscoderJobConfigEncryptionsAes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsAes128: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128 = { ... }
```


### GoogleTranscoderJobConfigEncryptionsDrmSystems <a name="GoogleTranscoderJobConfigEncryptionsDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsDrmSystems: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `clearkey`<sup>Optional</sup> <a name="clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.clearkey"></a>

```typescript
public readonly clearkey: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#clearkey GoogleTranscoderJob#clearkey}

---

##### `fairplay`<sup>Optional</sup> <a name="fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.fairplay"></a>

```typescript
public readonly fairplay: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#fairplay GoogleTranscoderJob#fairplay}

---

##### `playready`<sup>Optional</sup> <a name="playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.playready"></a>

```typescript
public readonly playready: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#playready GoogleTranscoderJob#playready}

---

##### `widevine`<sup>Optional</sup> <a name="widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems.property.widevine"></a>

```typescript
public readonly widevine: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#widevine GoogleTranscoderJob#widevine}

---

### GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsDrmSystemsClearkey: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey = { ... }
```


### GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsDrmSystemsFairplay: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay = { ... }
```


### GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsDrmSystemsPlayready: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready = { ... }
```


### GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsDrmSystemsWidevine: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine = { ... }
```


### GoogleTranscoderJobConfigEncryptionsMpegCenc <a name="GoogleTranscoderJobConfigEncryptionsMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsMpegCenc: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc.property.scheme">scheme</a></code> | <code>string</code> | Specify the encryption scheme. |

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#scheme GoogleTranscoderJob#scheme}

---

### GoogleTranscoderJobConfigEncryptionsSampleAes <a name="GoogleTranscoderJobConfigEncryptionsSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsSampleAes: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes = { ... }
```


### GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource <a name="GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigEncryptionsSecretManagerKeySource: googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion">secretVersion</a></code> | <code>string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#secret_version GoogleTranscoderJob#secret_version}

---

### GoogleTranscoderJobConfigInputs <a name="GoogleTranscoderJobConfigInputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigInputs: googleTranscoderJob.GoogleTranscoderJobConfigInputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.key">key</a></code> | <code>string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.uri">uri</a></code> | <code>string</code> | URI of the media. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

### GoogleTranscoderJobConfigManifests <a name="GoogleTranscoderJobConfigManifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigManifests: googleTranscoderJob.GoogleTranscoderJobConfigManifests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.fileName">fileName</a></code> | <code>string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.muxStreams">muxStreams</a></code> | <code>string[]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.type">type</a></code> | <code>string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#file_name GoogleTranscoderJob#file_name}

---

##### `muxStreams`<sup>Optional</sup> <a name="muxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.muxStreams"></a>

```typescript
public readonly muxStreams: string[];
```

- *Type:* string[]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#mux_streams GoogleTranscoderJob#mux_streams}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#type GoogleTranscoderJob#type}

---

### GoogleTranscoderJobConfigMuxStreams <a name="GoogleTranscoderJobConfigMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigMuxStreams: googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.container">container</a></code> | <code>string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.elementaryStreams">elementaryStreams</a></code> | <code>string[]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.encryptionId">encryptionId</a></code> | <code>string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.fileName">fileName</a></code> | <code>string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.key">key</a></code> | <code>string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.segmentSettings">segmentSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#container GoogleTranscoderJob#container}

---

##### `elementaryStreams`<sup>Optional</sup> <a name="elementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.elementaryStreams"></a>

```typescript
public readonly elementaryStreams: string[];
```

- *Type:* string[]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#elementary_streams GoogleTranscoderJob#elementary_streams}

---

##### `encryptionId`<sup>Optional</sup> <a name="encryptionId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.encryptionId"></a>

```typescript
public readonly encryptionId: string;
```

- *Type:* string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#encryption_id GoogleTranscoderJob#encryption_id}

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#file_name GoogleTranscoderJob#file_name}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#key GoogleTranscoderJob#key}

---

##### `segmentSettings`<sup>Optional</sup> <a name="segmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams.property.segmentSettings"></a>

```typescript
public readonly segmentSettings: GoogleTranscoderJobConfigMuxStreamsSegmentSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#segment_settings GoogleTranscoderJob#segment_settings}

---

### GoogleTranscoderJobConfigMuxStreamsSegmentSettings <a name="GoogleTranscoderJobConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigMuxStreamsSegmentSettings: googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration">segmentDuration</a></code> | <code>string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `segmentDuration`<sup>Optional</sup> <a name="segmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```typescript
public readonly segmentDuration: string;
```

- *Type:* string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#segment_duration GoogleTranscoderJob#segment_duration}

---

### GoogleTranscoderJobConfigOutput <a name="GoogleTranscoderJobConfigOutput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigOutput: googleTranscoderJob.GoogleTranscoderJobConfigOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput.property.uri">uri</a></code> | <code>string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

### GoogleTranscoderJobConfigOverlays <a name="GoogleTranscoderJobConfigOverlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigOverlays: googleTranscoderJob.GoogleTranscoderJobConfigOverlays = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.animations">animations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]</code> | animations block. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.image">image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a></code> | image block. |

---

##### `animations`<sup>Optional</sup> <a name="animations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.animations"></a>

```typescript
public readonly animations: IResolvable | GoogleTranscoderJobConfigOverlaysAnimations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#animations GoogleTranscoderJob#animations}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays.property.image"></a>

```typescript
public readonly image: GoogleTranscoderJobConfigOverlaysImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#image GoogleTranscoderJob#image}

---

### GoogleTranscoderJobConfigOverlaysAnimations <a name="GoogleTranscoderJobConfigOverlaysAnimations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigOverlaysAnimations: googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations.property.animationFade">animationFade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `animationFade`<sup>Optional</sup> <a name="animationFade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations.property.animationFade"></a>

```typescript
public readonly animationFade: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#animation_fade GoogleTranscoderJob#animation_fade}

---

### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigOverlaysAnimationsAnimationFade: googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType">fadeType</a></code> | <code>string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">endTimeOffset</a></code> | <code>string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `fadeType`<sup>Required</sup> <a name="fadeType" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```typescript
public readonly fadeType: string;
```

- *Type:* string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.

* 'FADE_IN': Fade the overlay object into view.

* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#fade_type GoogleTranscoderJob#fade_type}

---

##### `endTimeOffset`<sup>Optional</sup> <a name="endTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: string;
```

- *Type:* string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#end_time_offset GoogleTranscoderJob#end_time_offset}

---

##### `startTimeOffset`<sup>Optional</sup> <a name="startTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#start_time_offset GoogleTranscoderJob#start_time_offset}

---

##### `xy`<sup>Optional</sup> <a name="xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```typescript
public readonly xy: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#xy GoogleTranscoderJob#xy}

---

### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy: googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x">x</a></code> | <code>number</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y">y</a></code> | <code>number</code> | Normalized y coordinate. |

---

##### `x`<sup>Optional</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```typescript
public readonly x: number;
```

- *Type:* number

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#x GoogleTranscoderJob#x}

---

##### `y`<sup>Optional</sup> <a name="y" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```typescript
public readonly y: number;
```

- *Type:* number

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#y GoogleTranscoderJob#y}

---

### GoogleTranscoderJobConfigOverlaysImage <a name="GoogleTranscoderJobConfigOverlaysImage" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigOverlaysImage: googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage.property.uri">uri</a></code> | <code>string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#uri GoogleTranscoderJob#uri}

---

### GoogleTranscoderJobConfigPubsubDestination <a name="GoogleTranscoderJobConfigPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobConfigPubsubDestination: googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination.property.topic">topic</a></code> | <code>string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#topic GoogleTranscoderJob#topic}

---

### GoogleTranscoderJobTimeouts <a name="GoogleTranscoderJobTimeouts" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

const googleTranscoderJobTimeouts: googleTranscoderJob.GoogleTranscoderJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#create GoogleTranscoderJob#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#delete GoogleTranscoderJob#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#update GoogleTranscoderJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#create GoogleTranscoderJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#delete GoogleTranscoderJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_transcoder_job#update GoogleTranscoderJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleTranscoderJobConfigAdBreaksList <a name="GoogleTranscoderJobConfigAdBreaksList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigAdBreaksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigAdBreaks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]

---


### GoogleTranscoderJobConfigAdBreaksOutputReference <a name="GoogleTranscoderJobConfigAdBreaksOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```typescript
public resetStartTimeOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```typescript
public readonly startTimeOffsetInput: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigAdBreaks;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>

---


### GoogleTranscoderJobConfigAOutputReference <a name="GoogleTranscoderJobConfigAOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putAdBreaks">putAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEditList">putEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putElementaryStreams">putElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEncryptions">putEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putInputs">putInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putManifests">putManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putMuxStreams">putMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOverlays">putOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putPubsubDestination">putPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetAdBreaks">resetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEditList">resetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetElementaryStreams">resetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEncryptions">resetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetInputs">resetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetManifests">resetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetMuxStreams">resetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOverlays">resetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetPubsubDestination">resetPubsubDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdBreaks` <a name="putAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putAdBreaks"></a>

```typescript
public putAdBreaks(value: IResolvable | GoogleTranscoderJobConfigAdBreaks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]

---

##### `putEditList` <a name="putEditList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEditList"></a>

```typescript
public putEditList(value: IResolvable | GoogleTranscoderJobConfigEditListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]

---

##### `putElementaryStreams` <a name="putElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putElementaryStreams"></a>

```typescript
public putElementaryStreams(value: IResolvable | GoogleTranscoderJobConfigElementaryStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]

---

##### `putEncryptions` <a name="putEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEncryptions"></a>

```typescript
public putEncryptions(value: IResolvable | GoogleTranscoderJobConfigEncryptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]

---

##### `putInputs` <a name="putInputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putInputs"></a>

```typescript
public putInputs(value: IResolvable | GoogleTranscoderJobConfigInputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]

---

##### `putManifests` <a name="putManifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putManifests"></a>

```typescript
public putManifests(value: IResolvable | GoogleTranscoderJobConfigManifests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]

---

##### `putMuxStreams` <a name="putMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putMuxStreams"></a>

```typescript
public putMuxStreams(value: IResolvable | GoogleTranscoderJobConfigMuxStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]

---

##### `putOutput` <a name="putOutput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOutput"></a>

```typescript
public putOutput(value: GoogleTranscoderJobConfigOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

---

##### `putOverlays` <a name="putOverlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOverlays"></a>

```typescript
public putOverlays(value: IResolvable | GoogleTranscoderJobConfigOverlays[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]

---

##### `putPubsubDestination` <a name="putPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putPubsubDestination"></a>

```typescript
public putPubsubDestination(value: GoogleTranscoderJobConfigPubsubDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

---

##### `resetAdBreaks` <a name="resetAdBreaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetAdBreaks"></a>

```typescript
public resetAdBreaks(): void
```

##### `resetEditList` <a name="resetEditList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEditList"></a>

```typescript
public resetEditList(): void
```

##### `resetElementaryStreams` <a name="resetElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetElementaryStreams"></a>

```typescript
public resetElementaryStreams(): void
```

##### `resetEncryptions` <a name="resetEncryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetEncryptions"></a>

```typescript
public resetEncryptions(): void
```

##### `resetInputs` <a name="resetInputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetInputs"></a>

```typescript
public resetInputs(): void
```

##### `resetManifests` <a name="resetManifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetManifests"></a>

```typescript
public resetManifests(): void
```

##### `resetMuxStreams` <a name="resetMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetMuxStreams"></a>

```typescript
public resetMuxStreams(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetOverlays` <a name="resetOverlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetOverlays"></a>

```typescript
public resetOverlays(): void
```

##### `resetPubsubDestination` <a name="resetPubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.resetPubsubDestination"></a>

```typescript
public resetPubsubDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaks">adBreaks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList">GoogleTranscoderJobConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editList">editList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList">GoogleTranscoderJobConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreams">elementaryStreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList">GoogleTranscoderJobConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptions">encryptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList">GoogleTranscoderJobConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList">GoogleTranscoderJobConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifests">manifests</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList">GoogleTranscoderJobConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreams">muxStreams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList">GoogleTranscoderJobConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.output">output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference">GoogleTranscoderJobConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlays">overlays</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList">GoogleTranscoderJobConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestination">pubsubDestination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference">GoogleTranscoderJobConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaksInput">adBreaksInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editListInput">editListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreamsInput">elementaryStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptionsInput">encryptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputsInput">inputsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifestsInput">manifestsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreamsInput">muxStreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlaysInput">overlaysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestinationInput">pubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adBreaks`<sup>Required</sup> <a name="adBreaks" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaks"></a>

```typescript
public readonly adBreaks: GoogleTranscoderJobConfigAdBreaksList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaksList">GoogleTranscoderJobConfigAdBreaksList</a>

---

##### `editList`<sup>Required</sup> <a name="editList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editList"></a>

```typescript
public readonly editList: GoogleTranscoderJobConfigEditListStructList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList">GoogleTranscoderJobConfigEditListStructList</a>

---

##### `elementaryStreams`<sup>Required</sup> <a name="elementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreams"></a>

```typescript
public readonly elementaryStreams: GoogleTranscoderJobConfigElementaryStreamsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList">GoogleTranscoderJobConfigElementaryStreamsList</a>

---

##### `encryptions`<sup>Required</sup> <a name="encryptions" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptions"></a>

```typescript
public readonly encryptions: GoogleTranscoderJobConfigEncryptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList">GoogleTranscoderJobConfigEncryptionsList</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputs"></a>

```typescript
public readonly inputs: GoogleTranscoderJobConfigInputsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList">GoogleTranscoderJobConfigInputsList</a>

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifests"></a>

```typescript
public readonly manifests: GoogleTranscoderJobConfigManifestsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList">GoogleTranscoderJobConfigManifestsList</a>

---

##### `muxStreams`<sup>Required</sup> <a name="muxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreams"></a>

```typescript
public readonly muxStreams: GoogleTranscoderJobConfigMuxStreamsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList">GoogleTranscoderJobConfigMuxStreamsList</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.output"></a>

```typescript
public readonly output: GoogleTranscoderJobConfigOutputOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference">GoogleTranscoderJobConfigOutputOutputReference</a>

---

##### `overlays`<sup>Required</sup> <a name="overlays" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlays"></a>

```typescript
public readonly overlays: GoogleTranscoderJobConfigOverlaysList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList">GoogleTranscoderJobConfigOverlaysList</a>

---

##### `pubsubDestination`<sup>Required</sup> <a name="pubsubDestination" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestination"></a>

```typescript
public readonly pubsubDestination: GoogleTranscoderJobConfigPubsubDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference">GoogleTranscoderJobConfigPubsubDestinationOutputReference</a>

---

##### `adBreaksInput`<sup>Optional</sup> <a name="adBreaksInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.adBreaksInput"></a>

```typescript
public readonly adBreaksInput: IResolvable | GoogleTranscoderJobConfigAdBreaks[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAdBreaks">GoogleTranscoderJobConfigAdBreaks</a>[]

---

##### `editListInput`<sup>Optional</sup> <a name="editListInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.editListInput"></a>

```typescript
public readonly editListInput: IResolvable | GoogleTranscoderJobConfigEditListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]

---

##### `elementaryStreamsInput`<sup>Optional</sup> <a name="elementaryStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.elementaryStreamsInput"></a>

```typescript
public readonly elementaryStreamsInput: IResolvable | GoogleTranscoderJobConfigElementaryStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]

---

##### `encryptionsInput`<sup>Optional</sup> <a name="encryptionsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.encryptionsInput"></a>

```typescript
public readonly encryptionsInput: IResolvable | GoogleTranscoderJobConfigEncryptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.inputsInput"></a>

```typescript
public readonly inputsInput: IResolvable | GoogleTranscoderJobConfigInputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]

---

##### `manifestsInput`<sup>Optional</sup> <a name="manifestsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.manifestsInput"></a>

```typescript
public readonly manifestsInput: IResolvable | GoogleTranscoderJobConfigManifests[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]

---

##### `muxStreamsInput`<sup>Optional</sup> <a name="muxStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.muxStreamsInput"></a>

```typescript
public readonly muxStreamsInput: IResolvable | GoogleTranscoderJobConfigMuxStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: GoogleTranscoderJobConfigOutput;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

---

##### `overlaysInput`<sup>Optional</sup> <a name="overlaysInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.overlaysInput"></a>

```typescript
public readonly overlaysInput: IResolvable | GoogleTranscoderJobConfigOverlays[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]

---

##### `pubsubDestinationInput`<sup>Optional</sup> <a name="pubsubDestinationInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.pubsubDestinationInput"></a>

```typescript
public readonly pubsubDestinationInput: GoogleTranscoderJobConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigA;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigA">GoogleTranscoderJobConfigA</a>

---


### GoogleTranscoderJobConfigEditListStructList <a name="GoogleTranscoderJobConfigEditListStructList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigEditListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigEditListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>[]

---


### GoogleTranscoderJobConfigEditListStructOutputReference <a name="GoogleTranscoderJobConfigEditListStructOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetInputs">resetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputs` <a name="resetInputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetInputs"></a>

```typescript
public resetInputs(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```typescript
public resetStartTimeOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputsInput">inputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputsInput"></a>

```typescript
public readonly inputsInput: string[];
```

- *Type:* string[]

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```typescript
public readonly startTimeOffsetInput: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigEditListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEditListStruct">GoogleTranscoderJobConfigEditListStruct</a>

---


### GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">resetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">resetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec">resetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">resetSampleRateHertz</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelCount` <a name="resetChannelCount" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```typescript
public resetChannelCount(): void
```

##### `resetChannelLayout` <a name="resetChannelLayout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```typescript
public resetChannelLayout(): void
```

##### `resetCodec` <a name="resetCodec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```typescript
public resetCodec(): void
```

##### `resetSampleRateHertz` <a name="resetSampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```typescript
public resetSampleRateHertz(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">bitrateBpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">channelCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">channelLayoutInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">codecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">sampleRateHertzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">bitrateBps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">channelCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">channelLayout</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec">codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">sampleRateHertz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitrateBpsInput`<sup>Optional</sup> <a name="bitrateBpsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```typescript
public readonly bitrateBpsInput: number;
```

- *Type:* number

---

##### `channelCountInput`<sup>Optional</sup> <a name="channelCountInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```typescript
public readonly channelCountInput: number;
```

- *Type:* number

---

##### `channelLayoutInput`<sup>Optional</sup> <a name="channelLayoutInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```typescript
public readonly channelLayoutInput: string[];
```

- *Type:* string[]

---

##### `codecInput`<sup>Optional</sup> <a name="codecInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```typescript
public readonly codecInput: string;
```

- *Type:* string

---

##### `sampleRateHertzInput`<sup>Optional</sup> <a name="sampleRateHertzInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```typescript
public readonly sampleRateHertzInput: number;
```

- *Type:* number

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```typescript
public readonly bitrateBps: number;
```

- *Type:* number

---

##### `channelCount`<sup>Required</sup> <a name="channelCount" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```typescript
public readonly channelCount: number;
```

- *Type:* number

---

##### `channelLayout`<sup>Required</sup> <a name="channelLayout" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```typescript
public readonly channelLayout: string[];
```

- *Type:* string[]

---

##### `codec`<sup>Required</sup> <a name="codec" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```typescript
public readonly codec: string;
```

- *Type:* string

---

##### `sampleRateHertz`<sup>Required</sup> <a name="sampleRateHertz" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```typescript
public readonly sampleRateHertz: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigElementaryStreamsAudioStream;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

---


### GoogleTranscoderJobConfigElementaryStreamsList <a name="GoogleTranscoderJobConfigElementaryStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigElementaryStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigElementaryStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>[]

---


### GoogleTranscoderJobConfigElementaryStreamsOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream">putAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putVideoStream">putVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream">resetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream">resetVideoStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioStream` <a name="putAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream"></a>

```typescript
public putAudioStream(value: GoogleTranscoderJobConfigElementaryStreamsAudioStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `putVideoStream` <a name="putVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putVideoStream"></a>

```typescript
public putVideoStream(value: GoogleTranscoderJobConfigElementaryStreamsVideoStream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `resetAudioStream` <a name="resetAudioStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```typescript
public resetAudioStream(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetVideoStream` <a name="resetVideoStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```typescript
public resetVideoStream(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStream">audioStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStream">videoStream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput">audioStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput">videoStreamInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioStream`<sup>Required</sup> <a name="audioStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStream"></a>

```typescript
public readonly audioStream: GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `videoStream`<sup>Required</sup> <a name="videoStream" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStream"></a>

```typescript
public readonly videoStream: GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `audioStreamInput`<sup>Optional</sup> <a name="audioStreamInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```typescript
public readonly audioStreamInput: GoogleTranscoderJobConfigElementaryStreamsAudioStream;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsAudioStream">GoogleTranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `videoStreamInput`<sup>Optional</sup> <a name="videoStreamInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```typescript
public readonly videoStreamInput: GoogleTranscoderJobConfigElementaryStreamsVideoStream;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigElementaryStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreams">GoogleTranscoderJobConfigElementaryStreams</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">putHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">putSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">resetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">resetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">resetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">resetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">resetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">resetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">resetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">resetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">resetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">resetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">resetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">resetWidthPixels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHlg` <a name="putHlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```typescript
public putHlg(value: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `putSdr` <a name="putSdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```typescript
public putSdr(value: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `resetCrfLevel` <a name="resetCrfLevel" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```typescript
public resetCrfLevel(): void
```

##### `resetEntropyCoder` <a name="resetEntropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```typescript
public resetEntropyCoder(): void
```

##### `resetGopDuration` <a name="resetGopDuration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```typescript
public resetGopDuration(): void
```

##### `resetHeightPixels` <a name="resetHeightPixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```typescript
public resetHeightPixels(): void
```

##### `resetHlg` <a name="resetHlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```typescript
public resetHlg(): void
```

##### `resetPixelFormat` <a name="resetPixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```typescript
public resetPixelFormat(): void
```

##### `resetPreset` <a name="resetPreset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```typescript
public resetPreset(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRateControlMode` <a name="resetRateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```typescript
public resetRateControlMode(): void
```

##### `resetSdr` <a name="resetSdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```typescript
public resetSdr(): void
```

##### `resetVbvFullnessBits` <a name="resetVbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```typescript
public resetVbvFullnessBits(): void
```

##### `resetVbvSizeBits` <a name="resetVbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```typescript
public resetVbvSizeBits(): void
```

##### `resetWidthPixels` <a name="resetWidthPixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```typescript
public resetWidthPixels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">hlg</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">sdr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">bitrateBpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">crfLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">entropyCoderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">frameRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">gopDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">heightPixelsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">hlgInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">pixelFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">presetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">rateControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">sdrInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">vbvFullnessBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">vbvSizeBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">widthPixelsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">bitrateBps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">crfLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">entropyCoder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">frameRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">gopDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">heightPixels</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">pixelFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">preset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">rateControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">vbvFullnessBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">vbvSizeBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">widthPixels</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hlg`<sup>Required</sup> <a name="hlg" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```typescript
public readonly hlg: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `sdr`<sup>Required</sup> <a name="sdr" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```typescript
public readonly sdr: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `bitrateBpsInput`<sup>Optional</sup> <a name="bitrateBpsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```typescript
public readonly bitrateBpsInput: number;
```

- *Type:* number

---

##### `crfLevelInput`<sup>Optional</sup> <a name="crfLevelInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```typescript
public readonly crfLevelInput: number;
```

- *Type:* number

---

##### `entropyCoderInput`<sup>Optional</sup> <a name="entropyCoderInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```typescript
public readonly entropyCoderInput: string;
```

- *Type:* string

---

##### `frameRateInput`<sup>Optional</sup> <a name="frameRateInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```typescript
public readonly frameRateInput: number;
```

- *Type:* number

---

##### `gopDurationInput`<sup>Optional</sup> <a name="gopDurationInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```typescript
public readonly gopDurationInput: string;
```

- *Type:* string

---

##### `heightPixelsInput`<sup>Optional</sup> <a name="heightPixelsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```typescript
public readonly heightPixelsInput: number;
```

- *Type:* number

---

##### `hlgInput`<sup>Optional</sup> <a name="hlgInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```typescript
public readonly hlgInput: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `pixelFormatInput`<sup>Optional</sup> <a name="pixelFormatInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```typescript
public readonly pixelFormatInput: string;
```

- *Type:* string

---

##### `presetInput`<sup>Optional</sup> <a name="presetInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```typescript
public readonly presetInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `rateControlModeInput`<sup>Optional</sup> <a name="rateControlModeInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```typescript
public readonly rateControlModeInput: string;
```

- *Type:* string

---

##### `sdrInput`<sup>Optional</sup> <a name="sdrInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```typescript
public readonly sdrInput: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `vbvFullnessBitsInput`<sup>Optional</sup> <a name="vbvFullnessBitsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```typescript
public readonly vbvFullnessBitsInput: number;
```

- *Type:* number

---

##### `vbvSizeBitsInput`<sup>Optional</sup> <a name="vbvSizeBitsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```typescript
public readonly vbvSizeBitsInput: number;
```

- *Type:* number

---

##### `widthPixelsInput`<sup>Optional</sup> <a name="widthPixelsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```typescript
public readonly widthPixelsInput: number;
```

- *Type:* number

---

##### `bitrateBps`<sup>Required</sup> <a name="bitrateBps" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```typescript
public readonly bitrateBps: number;
```

- *Type:* number

---

##### `crfLevel`<sup>Required</sup> <a name="crfLevel" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```typescript
public readonly crfLevel: number;
```

- *Type:* number

---

##### `entropyCoder`<sup>Required</sup> <a name="entropyCoder" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```typescript
public readonly entropyCoder: string;
```

- *Type:* string

---

##### `frameRate`<sup>Required</sup> <a name="frameRate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```typescript
public readonly frameRate: number;
```

- *Type:* number

---

##### `gopDuration`<sup>Required</sup> <a name="gopDuration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```typescript
public readonly gopDuration: string;
```

- *Type:* string

---

##### `heightPixels`<sup>Required</sup> <a name="heightPixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```typescript
public readonly heightPixels: number;
```

- *Type:* number

---

##### `pixelFormat`<sup>Required</sup> <a name="pixelFormat" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```typescript
public readonly pixelFormat: string;
```

- *Type:* string

---

##### `preset`<sup>Required</sup> <a name="preset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```typescript
public readonly preset: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `rateControlMode`<sup>Required</sup> <a name="rateControlMode" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```typescript
public readonly rateControlMode: string;
```

- *Type:* string

---

##### `vbvFullnessBits`<sup>Required</sup> <a name="vbvFullnessBits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```typescript
public readonly vbvFullnessBits: number;
```

- *Type:* number

---

##### `vbvSizeBits`<sup>Required</sup> <a name="vbvSizeBits" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```typescript
public readonly vbvSizeBits: number;
```

- *Type:* number

---

##### `widthPixels`<sup>Required</sup> <a name="widthPixels" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```typescript
public readonly widthPixels: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference <a name="GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264">putH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264">resetH264</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putH264` <a name="putH264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```typescript
public putH264(value: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `resetH264` <a name="resetH264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```typescript
public resetH264(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264">h264</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">h264Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `h264`<sup>Required</sup> <a name="h264" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```typescript
public readonly h264: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `h264Input`<sup>Optional</sup> <a name="h264Input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```typescript
public readonly h264Input: GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264">GoogleTranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigElementaryStreamsVideoStream;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigElementaryStreamsVideoStream">GoogleTranscoderJobConfigElementaryStreamsVideoStream</a>

---


### GoogleTranscoderJobConfigEncryptionsAes128OutputReference <a name="GoogleTranscoderJobConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsAes128;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey">putClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay">putFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready">putPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine">putWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey">resetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay">resetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready">resetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine">resetWidevine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClearkey` <a name="putClearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```typescript
public putClearkey(value: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `putFairplay` <a name="putFairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```typescript
public putFairplay(value: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `putPlayready` <a name="putPlayready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```typescript
public putPlayready(value: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `putWidevine` <a name="putWidevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```typescript
public putWidevine(value: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `resetClearkey` <a name="resetClearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```typescript
public resetClearkey(): void
```

##### `resetFairplay` <a name="resetFairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```typescript
public resetFairplay(): void
```

##### `resetPlayready` <a name="resetPlayready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```typescript
public resetPlayready(): void
```

##### `resetWidevine` <a name="resetWidevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```typescript
public resetWidevine(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey">clearkey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay">fairplay</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready">playready</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine">widevine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">clearkeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">fairplayInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">playreadyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">widevineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clearkey`<sup>Required</sup> <a name="clearkey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```typescript
public readonly clearkey: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `fairplay`<sup>Required</sup> <a name="fairplay" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```typescript
public readonly fairplay: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `playready`<sup>Required</sup> <a name="playready" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```typescript
public readonly playready: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `widevine`<sup>Required</sup> <a name="widevine" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```typescript
public readonly widevine: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `clearkeyInput`<sup>Optional</sup> <a name="clearkeyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```typescript
public readonly clearkeyInput: GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey">GoogleTranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `fairplayInput`<sup>Optional</sup> <a name="fairplayInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```typescript
public readonly fairplayInput: GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay">GoogleTranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `playreadyInput`<sup>Optional</sup> <a name="playreadyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```typescript
public readonly playreadyInput: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `widevineInput`<sup>Optional</sup> <a name="widevineInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```typescript
public readonly widevineInput: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsDrmSystems;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready">GoogleTranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---


### GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference <a name="GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine">GoogleTranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---


### GoogleTranscoderJobConfigEncryptionsList <a name="GoogleTranscoderJobConfigEncryptionsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigEncryptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigEncryptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>[]

---


### GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference <a name="GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsMpegCenc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

---


### GoogleTranscoderJobConfigEncryptionsOutputReference <a name="GoogleTranscoderJobConfigEncryptionsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putAes128">putAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems">putDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putMpegCenc">putMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSampleAes">putSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource">putSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetAes128">resetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetDrmSystems">resetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetMpegCenc">resetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSampleAes">resetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource">resetSecretManagerKeySource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAes128` <a name="putAes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putAes128"></a>

```typescript
public putAes128(value: GoogleTranscoderJobConfigEncryptionsAes128): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

---

##### `putDrmSystems` <a name="putDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems"></a>

```typescript
public putDrmSystems(value: GoogleTranscoderJobConfigEncryptionsDrmSystems): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `putMpegCenc` <a name="putMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putMpegCenc"></a>

```typescript
public putMpegCenc(value: GoogleTranscoderJobConfigEncryptionsMpegCenc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `putSampleAes` <a name="putSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSampleAes"></a>

```typescript
public putSampleAes(value: GoogleTranscoderJobConfigEncryptionsSampleAes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

---

##### `putSecretManagerKeySource` <a name="putSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```typescript
public putSecretManagerKeySource(value: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `resetAes128` <a name="resetAes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetAes128"></a>

```typescript
public resetAes128(): void
```

##### `resetDrmSystems` <a name="resetDrmSystems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetDrmSystems"></a>

```typescript
public resetDrmSystems(): void
```

##### `resetMpegCenc` <a name="resetMpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetMpegCenc"></a>

```typescript
public resetMpegCenc(): void
```

##### `resetSampleAes` <a name="resetSampleAes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSampleAes"></a>

```typescript
public resetSampleAes(): void
```

##### `resetSecretManagerKeySource` <a name="resetSecretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```typescript
public resetSecretManagerKeySource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128">aes128</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference">GoogleTranscoderJobConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystems">drmSystems</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCenc">mpegCenc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAes">sampleAes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource">secretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128Input">aes128Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput">drmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput">mpegCencInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput">sampleAesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">secretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aes128`<sup>Required</sup> <a name="aes128" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128"></a>

```typescript
public readonly aes128: GoogleTranscoderJobConfigEncryptionsAes128OutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128OutputReference">GoogleTranscoderJobConfigEncryptionsAes128OutputReference</a>

---

##### `drmSystems`<sup>Required</sup> <a name="drmSystems" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystems"></a>

```typescript
public readonly drmSystems: GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference">GoogleTranscoderJobConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `mpegCenc`<sup>Required</sup> <a name="mpegCenc" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCenc"></a>

```typescript
public readonly mpegCenc: GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference">GoogleTranscoderJobConfigEncryptionsMpegCencOutputReference</a>

---

##### `sampleAes`<sup>Required</sup> <a name="sampleAes" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAes"></a>

```typescript
public readonly sampleAes: GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference">GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference</a>

---

##### `secretManagerKeySource`<sup>Required</sup> <a name="secretManagerKeySource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```typescript
public readonly secretManagerKeySource: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `aes128Input`<sup>Optional</sup> <a name="aes128Input" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.aes128Input"></a>

```typescript
public readonly aes128Input: GoogleTranscoderJobConfigEncryptionsAes128;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsAes128">GoogleTranscoderJobConfigEncryptionsAes128</a>

---

##### `drmSystemsInput`<sup>Optional</sup> <a name="drmSystemsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```typescript
public readonly drmSystemsInput: GoogleTranscoderJobConfigEncryptionsDrmSystems;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsDrmSystems">GoogleTranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mpegCencInput`<sup>Optional</sup> <a name="mpegCencInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```typescript
public readonly mpegCencInput: GoogleTranscoderJobConfigEncryptionsMpegCenc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsMpegCenc">GoogleTranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `sampleAesInput`<sup>Optional</sup> <a name="sampleAesInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```typescript
public readonly sampleAesInput: GoogleTranscoderJobConfigEncryptionsSampleAes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

---

##### `secretManagerKeySourceInput`<sup>Optional</sup> <a name="secretManagerKeySourceInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```typescript
public readonly secretManagerKeySourceInput: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigEncryptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptions">GoogleTranscoderJobConfigEncryptions</a>

---


### GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference <a name="GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsSampleAes;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSampleAes">GoogleTranscoderJobConfigEncryptionsSampleAes</a>

---


### GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference <a name="GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource">GoogleTranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---


### GoogleTranscoderJobConfigInputsList <a name="GoogleTranscoderJobConfigInputsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigInputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigInputs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>[]

---


### GoogleTranscoderJobConfigInputsOutputReference <a name="GoogleTranscoderJobConfigInputsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigInputs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigInputs">GoogleTranscoderJobConfigInputs</a>

---


### GoogleTranscoderJobConfigManifestsList <a name="GoogleTranscoderJobConfigManifestsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigManifests[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>[]

---


### GoogleTranscoderJobConfigManifestsOutputReference <a name="GoogleTranscoderJobConfigManifestsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetMuxStreams">resetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileName` <a name="resetFileName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetFileName"></a>

```typescript
public resetFileName(): void
```

##### `resetMuxStreams` <a name="resetMuxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetMuxStreams"></a>

```typescript
public resetMuxStreams(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreamsInput">muxStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreams">muxStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `muxStreamsInput`<sup>Optional</sup> <a name="muxStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreamsInput"></a>

```typescript
public readonly muxStreamsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `muxStreams`<sup>Required</sup> <a name="muxStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.muxStreams"></a>

```typescript
public readonly muxStreams: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigManifests;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigManifests">GoogleTranscoderJobConfigManifests</a>

---


### GoogleTranscoderJobConfigMuxStreamsList <a name="GoogleTranscoderJobConfigMuxStreamsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigMuxStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigMuxStreams[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>[]

---


### GoogleTranscoderJobConfigMuxStreamsOutputReference <a name="GoogleTranscoderJobConfigMuxStreamsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings">putSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams">resetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId">resetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings">resetSegmentSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSegmentSettings` <a name="putSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```typescript
public putSegmentSettings(value: GoogleTranscoderJobConfigMuxStreamsSegmentSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetElementaryStreams` <a name="resetElementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```typescript
public resetElementaryStreams(): void
```

##### `resetEncryptionId` <a name="resetEncryptionId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```typescript
public resetEncryptionId(): void
```

##### `resetFileName` <a name="resetFileName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetFileName"></a>

```typescript
public resetFileName(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetSegmentSettings` <a name="resetSegmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```typescript
public resetSegmentSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings">segmentSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput">elementaryStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput">encryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput">segmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams">elementaryStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionId">encryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentSettings`<sup>Required</sup> <a name="segmentSettings" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```typescript
public readonly segmentSettings: GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `elementaryStreamsInput`<sup>Optional</sup> <a name="elementaryStreamsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```typescript
public readonly elementaryStreamsInput: string[];
```

- *Type:* string[]

---

##### `encryptionIdInput`<sup>Optional</sup> <a name="encryptionIdInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```typescript
public readonly encryptionIdInput: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `segmentSettingsInput`<sup>Optional</sup> <a name="segmentSettingsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```typescript
public readonly segmentSettingsInput: GoogleTranscoderJobConfigMuxStreamsSegmentSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `elementaryStreams`<sup>Required</sup> <a name="elementaryStreams" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```typescript
public readonly elementaryStreams: string[];
```

- *Type:* string[]

---

##### `encryptionId`<sup>Required</sup> <a name="encryptionId" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.encryptionId"></a>

```typescript
public readonly encryptionId: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigMuxStreams;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreams">GoogleTranscoderJobConfigMuxStreams</a>

---


### GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference <a name="GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">resetSegmentDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSegmentDuration` <a name="resetSegmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```typescript
public resetSegmentDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">segmentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">segmentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `segmentDurationInput`<sup>Optional</sup> <a name="segmentDurationInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```typescript
public readonly segmentDurationInput: string;
```

- *Type:* string

---

##### `segmentDuration`<sup>Required</sup> <a name="segmentDuration" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```typescript
public readonly segmentDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigMuxStreamsSegmentSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigMuxStreamsSegmentSettings">GoogleTranscoderJobConfigMuxStreamsSegmentSettings</a>

---


### GoogleTranscoderJobConfigOutputOutputReference <a name="GoogleTranscoderJobConfigOutputOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigOutput;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOutput">GoogleTranscoderJobConfigOutput</a>

---


### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">putXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">resetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">resetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">resetXy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putXy` <a name="putXy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```typescript
public putXy(value: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `resetEndTimeOffset` <a name="resetEndTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```typescript
public resetEndTimeOffset(): void
```

##### `resetStartTimeOffset` <a name="resetStartTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```typescript
public resetStartTimeOffset(): void
```

##### `resetXy` <a name="resetXy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```typescript
public resetXy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">xy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">endTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">fadeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">startTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">xyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">endTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">fadeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">startTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xy`<sup>Required</sup> <a name="xy" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```typescript
public readonly xy: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `endTimeOffsetInput`<sup>Optional</sup> <a name="endTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```typescript
public readonly endTimeOffsetInput: string;
```

- *Type:* string

---

##### `fadeTypeInput`<sup>Optional</sup> <a name="fadeTypeInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```typescript
public readonly fadeTypeInput: string;
```

- *Type:* string

---

##### `startTimeOffsetInput`<sup>Optional</sup> <a name="startTimeOffsetInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```typescript
public readonly startTimeOffsetInput: string;
```

- *Type:* string

---

##### `xyInput`<sup>Optional</sup> <a name="xyInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```typescript
public readonly xyInput: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `endTimeOffset`<sup>Required</sup> <a name="endTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```typescript
public readonly endTimeOffset: string;
```

- *Type:* string

---

##### `fadeType`<sup>Required</sup> <a name="fadeType" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```typescript
public readonly fadeType: string;
```

- *Type:* string

---

##### `startTimeOffset`<sup>Required</sup> <a name="startTimeOffset" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```typescript
public readonly startTimeOffset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---


### GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">resetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">resetY</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetX` <a name="resetX" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```typescript
public resetX(): void
```

##### `resetY` <a name="resetY" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```typescript
public resetY(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">xInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">yInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">x</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">y</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xInput`<sup>Optional</sup> <a name="xInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```typescript
public readonly xInput: number;
```

- *Type:* number

---

##### `yInput`<sup>Optional</sup> <a name="yInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```typescript
public readonly yInput: number;
```

- *Type:* number

---

##### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```typescript
public readonly x: number;
```

- *Type:* number

---

##### `y`<sup>Required</sup> <a name="y" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```typescript
public readonly y: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---


### GoogleTranscoderJobConfigOverlaysAnimationsList <a name="GoogleTranscoderJobConfigOverlaysAnimationsList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigOverlaysAnimationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigOverlaysAnimations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]

---


### GoogleTranscoderJobConfigOverlaysAnimationsOutputReference <a name="GoogleTranscoderJobConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade">putAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade">resetAnimationFade</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnimationFade` <a name="putAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```typescript
public putAnimationFade(value: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `resetAnimationFade` <a name="resetAnimationFade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```typescript
public resetAnimationFade(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade">animationFade</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput">animationFadeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `animationFade`<sup>Required</sup> <a name="animationFade" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```typescript
public readonly animationFade: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `animationFadeInput`<sup>Optional</sup> <a name="animationFadeInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```typescript
public readonly animationFadeInput: GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade">GoogleTranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigOverlaysAnimations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>

---


### GoogleTranscoderJobConfigOverlaysImageOutputReference <a name="GoogleTranscoderJobConfigOverlaysImageOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigOverlaysImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

---


### GoogleTranscoderJobConfigOverlaysList <a name="GoogleTranscoderJobConfigOverlaysList" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.get"></a>

```typescript
public get(index: number): GoogleTranscoderJobConfigOverlaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigOverlays[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>[]

---


### GoogleTranscoderJobConfigOverlaysOutputReference <a name="GoogleTranscoderJobConfigOverlaysOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putAnimations">putAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetAnimations">resetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetImage">resetImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnimations` <a name="putAnimations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putAnimations"></a>

```typescript
public putAnimations(value: IResolvable | GoogleTranscoderJobConfigOverlaysAnimations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]

---

##### `putImage` <a name="putImage" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putImage"></a>

```typescript
public putImage(value: GoogleTranscoderJobConfigOverlaysImage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

---

##### `resetAnimations` <a name="resetAnimations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetAnimations"></a>

```typescript
public resetAnimations(): void
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.resetImage"></a>

```typescript
public resetImage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animations">animations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList">GoogleTranscoderJobConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.image">image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference">GoogleTranscoderJobConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animationsInput">animationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `animations`<sup>Required</sup> <a name="animations" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animations"></a>

```typescript
public readonly animations: GoogleTranscoderJobConfigOverlaysAnimationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimationsList">GoogleTranscoderJobConfigOverlaysAnimationsList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.image"></a>

```typescript
public readonly image: GoogleTranscoderJobConfigOverlaysImageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImageOutputReference">GoogleTranscoderJobConfigOverlaysImageOutputReference</a>

---

##### `animationsInput`<sup>Optional</sup> <a name="animationsInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.animationsInput"></a>

```typescript
public readonly animationsInput: IResolvable | GoogleTranscoderJobConfigOverlaysAnimations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysAnimations">GoogleTranscoderJobConfigOverlaysAnimations</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: GoogleTranscoderJobConfigOverlaysImage;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysImage">GoogleTranscoderJobConfigOverlaysImage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlaysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobConfigOverlays;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigOverlays">GoogleTranscoderJobConfigOverlays</a>

---


### GoogleTranscoderJobConfigPubsubDestinationOutputReference <a name="GoogleTranscoderJobConfigPubsubDestinationOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleTranscoderJobConfigPubsubDestination;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobConfigPubsubDestination">GoogleTranscoderJobConfigPubsubDestination</a>

---


### GoogleTranscoderJobTimeoutsOutputReference <a name="GoogleTranscoderJobTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleTranscoderJob } from '@cdktf/provider-google-beta'

new googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleTranscoderJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleTranscoderJob.GoogleTranscoderJobTimeouts">GoogleTranscoderJobTimeouts</a>

---



