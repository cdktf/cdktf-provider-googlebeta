# `google_clouddeploy_target`

Refer to the Terraform Registory for docs: [`google_clouddeploy_target`](https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target).

# `googleClouddeployTarget` Submodule <a name="`googleClouddeployTarget` Submodule" id="@cdktf/provider-google-beta.googleClouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleClouddeployTarget <a name="GoogleClouddeployTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTarget(scope: Construct, id: string, config: GoogleClouddeployTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig">GoogleClouddeployTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster">putAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs">putExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke">putGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget">putMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun">putRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster">resetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs">resetExecutionConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke">resetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget">resetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval">resetRequireApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun">resetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAnthosCluster` <a name="putAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster"></a>

```typescript
public putAnthosCluster(value: GoogleClouddeployTargetAnthosCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putAnthosCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `putExecutionConfigs` <a name="putExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs"></a>

```typescript
public putExecutionConfigs(value: IResolvable | GoogleClouddeployTargetExecutionConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

---

##### `putGke` <a name="putGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke"></a>

```typescript
public putGke(value: GoogleClouddeployTargetGke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `putMultiTarget` <a name="putMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget"></a>

```typescript
public putMultiTarget(value: GoogleClouddeployTargetMultiTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putMultiTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `putRun` <a name="putRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun"></a>

```typescript
public putRun(value: GoogleClouddeployTargetRun): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putRun.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleClouddeployTargetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAnthosCluster` <a name="resetAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetAnthosCluster"></a>

```typescript
public resetAnthosCluster(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExecutionConfigs` <a name="resetExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetExecutionConfigs"></a>

```typescript
public resetExecutionConfigs(): void
```

##### `resetGke` <a name="resetGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetGke"></a>

```typescript
public resetGke(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMultiTarget` <a name="resetMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetMultiTarget"></a>

```typescript
public resetMultiTarget(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRequireApproval` <a name="resetRequireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRequireApproval"></a>

```typescript
public resetRequireApproval(): void
```

##### `resetRun` <a name="resetRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetRun"></a>

```typescript
public resetRun(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs">executionConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run">run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput">anthosClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput">executionConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput">gkeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput">multiTargetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput">requireApprovalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput">runInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `anthosCluster`<sup>Required</sup> <a name="anthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosCluster"></a>

```typescript
public readonly anthosCluster: GoogleClouddeployTargetAnthosClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference">GoogleClouddeployTargetAnthosClusterOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `executionConfigs`<sup>Required</sup> <a name="executionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigs"></a>

```typescript
public readonly executionConfigs: GoogleClouddeployTargetExecutionConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList">GoogleClouddeployTargetExecutionConfigsList</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gke"></a>

```typescript
public readonly gke: GoogleClouddeployTargetGkeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference">GoogleClouddeployTargetGkeOutputReference</a>

---

##### `multiTarget`<sup>Required</sup> <a name="multiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTarget"></a>

```typescript
public readonly multiTarget: GoogleClouddeployTargetMultiTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference">GoogleClouddeployTargetMultiTargetOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.run"></a>

```typescript
public readonly run: GoogleClouddeployTargetRunOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference">GoogleClouddeployTargetRunOutputReference</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployTargetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference">GoogleClouddeployTargetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anthosClusterInput`<sup>Optional</sup> <a name="anthosClusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.anthosClusterInput"></a>

```typescript
public readonly anthosClusterInput: GoogleClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionConfigsInput`<sup>Optional</sup> <a name="executionConfigsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.executionConfigsInput"></a>

```typescript
public readonly executionConfigsInput: IResolvable | GoogleClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

---

##### `gkeInput`<sup>Optional</sup> <a name="gkeInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.gkeInput"></a>

```typescript
public readonly gkeInput: GoogleClouddeployTargetGke;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multiTargetInput`<sup>Optional</sup> <a name="multiTargetInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.multiTargetInput"></a>

```typescript
public readonly multiTargetInput: GoogleClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `requireApprovalInput`<sup>Optional</sup> <a name="requireApprovalInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApprovalInput"></a>

```typescript
public readonly requireApprovalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runInput`<sup>Optional</sup> <a name="runInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.runInput"></a>

```typescript
public readonly runInput: GoogleClouddeployTargetRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleClouddeployTargetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a> | cdktf.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `requireApproval`<sup>Required</sup> <a name="requireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleClouddeployTargetAnthosCluster <a name="GoogleClouddeployTargetAnthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetAnthosCluster: googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership">membership</a></code> | <code>string</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}

---

### GoogleClouddeployTargetConfig <a name="GoogleClouddeployTargetConfig" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetConfig: googleClouddeployTarget.GoogleClouddeployTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name">name</a></code> | <code>string</code> | Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster">anthosCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description">description</a></code> | <code>string</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs">executionConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#id GoogleClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget">multiTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | multi_target block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval">requireApproval</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run">run</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#name GoogleClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#annotations GoogleClouddeployTarget#annotations}

---

##### `anthosCluster`<sup>Optional</sup> <a name="anthosCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.anthosCluster"></a>

```typescript
public readonly anthosCluster: GoogleClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#anthos_cluster GoogleClouddeployTarget#anthos_cluster}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#description GoogleClouddeployTarget#description}

---

##### `executionConfigs`<sup>Optional</sup> <a name="executionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.executionConfigs"></a>

```typescript
public readonly executionConfigs: IResolvable | GoogleClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

execution_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#execution_configs GoogleClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.gke"></a>

```typescript
public readonly gke: GoogleClouddeployTargetGke;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#gke GoogleClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#id GoogleClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#labels GoogleClouddeployTarget#labels}

---

##### `multiTarget`<sup>Optional</sup> <a name="multiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.multiTarget"></a>

```typescript
public readonly multiTarget: GoogleClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

multi_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#multi_target GoogleClouddeployTarget#multi_target}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#project GoogleClouddeployTarget#project}

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.requireApproval"></a>

```typescript
public readonly requireApproval: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#require_approval GoogleClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.run"></a>

```typescript
public readonly run: GoogleClouddeployTargetRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#run GoogleClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleClouddeployTargetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#timeouts GoogleClouddeployTarget#timeouts}

---

### GoogleClouddeployTargetExecutionConfigs <a name="GoogleClouddeployTargetExecutionConfigs" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetExecutionConfigs: googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages">usages</a></code> | <code>string[]</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool">workerPool</a></code> | <code>string</code> | Optional. |

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#usages GoogleClouddeployTarget#usages}

---

##### `artifactStorage`<sup>Optional</sup> <a name="artifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#execution_timeout GoogleClouddeployTarget#execution_timeout}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#worker_pool GoogleClouddeployTarget#worker_pool}

---

### GoogleClouddeployTargetGke <a name="GoogleClouddeployTargetGke" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetGke: googleClouddeployTarget.GoogleClouddeployTargetGke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster">cluster</a></code> | <code>string</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp">internalIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Optional. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}

---

### GoogleClouddeployTargetMultiTarget <a name="GoogleClouddeployTargetMultiTarget" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetMultiTarget: googleClouddeployTarget.GoogleClouddeployTargetMultiTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds">targetIds</a></code> | <code>string[]</code> | Required. The target_ids of this multiTarget. |

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

Required. The target_ids of this multiTarget.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#target_ids GoogleClouddeployTarget#target_ids}

---

### GoogleClouddeployTargetRun <a name="GoogleClouddeployTargetRun" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetRun: googleClouddeployTarget.GoogleClouddeployTargetRun = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location">location</a></code> | <code>string</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#location GoogleClouddeployTarget#location}

---

### GoogleClouddeployTargetTimeouts <a name="GoogleClouddeployTargetTimeouts" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

const googleClouddeployTargetTimeouts: googleClouddeployTarget.GoogleClouddeployTargetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#create GoogleClouddeployTarget#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#update GoogleClouddeployTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#create GoogleClouddeployTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_clouddeploy_target#update GoogleClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleClouddeployTargetAnthosClusterOutputReference <a name="GoogleClouddeployTargetAnthosClusterOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership">resetMembership</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMembership` <a name="resetMembership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```typescript
public resetMembership(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput">membershipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership">membership</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `membershipInput`<sup>Optional</sup> <a name="membershipInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```typescript
public readonly membershipInput: string;
```

- *Type:* string

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```typescript
public readonly membership: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetAnthosCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetAnthosCluster">GoogleClouddeployTargetAnthosCluster</a>

---


### GoogleClouddeployTargetExecutionConfigsList <a name="GoogleClouddeployTargetExecutionConfigsList" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get"></a>

```typescript
public get(index: number): GoogleClouddeployTargetExecutionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleClouddeployTargetExecutionConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a>[]

---


### GoogleClouddeployTargetExecutionConfigsOutputReference <a name="GoogleClouddeployTargetExecutionConfigsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">resetArtifactStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactStorage` <a name="resetArtifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```typescript
public resetArtifactStorage(): void
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```typescript
public resetExecutionTimeout(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```typescript
public resetWorkerPool(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">artifactStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">artifactStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">executionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool">workerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactStorageInput`<sup>Optional</sup> <a name="artifactStorageInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```typescript
public readonly artifactStorageInput: string;
```

- *Type:* string

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```typescript
public readonly executionTimeoutInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```typescript
public readonly workerPoolInput: string;
```

- *Type:* string

---

##### `artifactStorage`<sup>Required</sup> <a name="artifactStorage" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```typescript
public readonly artifactStorage: string;
```

- *Type:* string

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```typescript
public readonly workerPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetExecutionConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetExecutionConfigs">GoogleClouddeployTargetExecutionConfigs</a> | cdktf.IResolvable

---


### GoogleClouddeployTargetGkeOutputReference <a name="GoogleClouddeployTargetGkeOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```typescript
public resetInternalIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp">internalIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```typescript
public readonly internalIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalIp"></a>

```typescript
public readonly internalIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetGke;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetGke">GoogleClouddeployTargetGke</a>

---


### GoogleClouddeployTargetMultiTargetOutputReference <a name="GoogleClouddeployTargetMultiTargetOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIdsInput"></a>

```typescript
public readonly targetIdsInput: string[];
```

- *Type:* string[]

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetMultiTarget;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetMultiTarget">GoogleClouddeployTargetMultiTarget</a>

---


### GoogleClouddeployTargetRunOutputReference <a name="GoogleClouddeployTargetRunOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRunOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetRun;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetRun">GoogleClouddeployTargetRun</a>

---


### GoogleClouddeployTargetTimeoutsOutputReference <a name="GoogleClouddeployTargetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleClouddeployTarget } from '@cdktf/provider-google-beta'

new googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleClouddeployTargetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleClouddeployTarget.GoogleClouddeployTargetTimeouts">GoogleClouddeployTargetTimeouts</a> | cdktf.IResolvable

---



